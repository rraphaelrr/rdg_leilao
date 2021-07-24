import React, { Component } from 'react';                 
import Text from '../../componentes/text';
import { BackHandler, AppRegistry, View, StatusBar, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Objetos from '../../constants/objetos';
import { NavigationEvents } from 'react-navigation';
import { format } from 'date-fns';
import Info from '../../constants/info';
import layout_logado from '../../templates/style_logado';

export default class CustomSidebarNotificacao extends Component {

    constructor(props) {
        super(props)
        this.state = this.getInitialState();
    }

    evento = () => {
        global.rota_nome = 'NavScreen1';
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('NavScreen1');
            return true;
        });
    };

    //estado inicial das variáveis
    getInitialState = () => ({
        variaveis_vai_aqui: '',
        hora_anterior: new Date(),
        lista_msg: [],
        total_msg: 0,
        com_notificacao: false,
        sem_notificacao: true,

    });

    //resetar todas variáveis
    resetState = () => {
        this.setState(this.getInitialState());
    };

    //timeout
    onAction = () => {
        var hora_acao = new Date();
        var hora_ini = hora_acao.getMinutes();
        var hora_ant = this.state.hora_anterior.getMinutes();
        var minutos = hora_ini - hora_ant;

        if (minutos >= 5) {
            Alert.alert('Sua sessão expirou!', 'Por favor logue novamente.');
            this.props.navigation.navigate("login");
        } else {
            this.setState({ hora_anterior: hora_acao });
        }

    };

    notificacoes = async () => {

        this.setState({ total_msg: 0, lista_msg: [] })

        var data_de = format(new Date(), 'yyyy-MM-dd');
        var data_ate = format(new Date(), 'yyyy-MM-dd');

        console.log(data_de);
        console.log(data_ate);

        fetch(Info.ip + 'mensagem-conta/lista', {
            method: 'post',
            headers: global.headers,
            body: JSON.stringify({
                conta_id: global.pessoa.conta_id,
                data_de: data_de,
                data_ate: data_ate
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);

                var keys = Object.keys(responseJson);
                var Tamanho_key = keys.length;
                console.log(Tamanho_key);
                var tem_notificacao = 0;

                if (Tamanho_key > 0) {

                    for (var i = 0; i < Tamanho_key; i++) {
                        if (responseJson[i].status == 0) {

                            var str = responseJson[i].mensagem;
                            var res = '';

                            if (str.length > 40) {
                                res = str.substr(0, 40);
                                res = res + ' ...'
                            } else {
                                res = responseJson[i].mensagem;
                            }

                            this.setState({
                                lista_msg: this.state.lista_msg.concat(
                                    {
                                        id: responseJson[i].id,
                                        msg: responseJson[i].mensagem,
                                        inicio: res,


                                    },

                                )
                            });
                            tem_notificacao = 1;
                        }
                    }

                    if(tem_notificacao == 1){
                        this.setState({ sem_notificacao:false, com_notificacao:true })
                    }else{
                        this.setState({ sem_notificacao:true, com_notificacao:false })
                    }
                }

            })
            .catch((error) => {
                console.error(error);
            });

    };

    notificacoes_status = (id) => {

        fetch(Info.ip + 'mensagem-conta/status', {
            method: 'post',
            headers: global.headers,
            body: JSON.stringify({
                id: id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.notificacoes();
            })
            .catch((error) => {
                console.error(error);
            });

    };

    exibir_msg = (dados) => {

        var nome = global.pessoa.nome.split(" ");
        Alert.alert(
            nome[0],
            dados.msg,
            [
                {
                    text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
                },
                {
                    text: 'Marcar como Lida', onPress: () => {
                        console.log('confirmar');
                        this.notificacoes_status(dados.id);
                    },
                }
            ],
            { cancelable: false }
        );
    };


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={layout_logado.styles.container}>
                <View style={layout_logado.styles.container} onTouchStart={() => this.onAction()}>
                    <StatusBar hidden={false} backgroundColor={Objetos.cor_statusbar} />
                    <NavigationEvents
                        onWillFocus={payload => {
                            console.log('reload page');
                            this.resetState();
                            this.notificacoes();
                            this.evento();
                        }}
                    />
                    {Objetos.notificacao_img}

                    {this.state.sem_notificacao ? (
                        <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                            <Text style={layout_logado.styles.texto_caixa_msg}>{'Você não tem nenhuma notificação.'}</Text>
                        </View>
                    ) : null}

                    {this.state.com_notificacao ? (
                        <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                            {this.state.lista_msg.map((i) => {
                                return (

                                    <TouchableOpacity key={i.id} style={layout_logado.styles.caixa_msg}
                                        onPress={() => this.exibir_msg({ id: i.id, msg: i.msg })}>
                                        <Text style={layout_logado.styles.texto_caixa_msg}>{i.inicio}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    ) : null}


                </View>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('CustomSidebarNotificacao', () => CustomSidebarNotificacao);
