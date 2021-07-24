//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';                 
import Text from '../../componentes/text';
import { BackHandler, View, Image, Alert, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Produtos from '../../constants/Produtos';
import Icon from 'react-native-vector-icons/FontAwesome';
import layout_logado from '../../templates/style_logado';
import { card_info_cliente, Card_info_cliente_2, Card_info_cliente_3, card_info_cliente_menu } from '../../constants/Cards';
export default class CustomSidebarMenu extends Component {
    constructor(props) {
        var nome = global.pessoa.nome.split(" ");

        super(props);
        this.state = {
            nome:  nome[0],
        };
        this.items = Produtos.home;
     
    }


    _sair = () => {
        const { navigate } = this.props.navigation;
        var nome = global.pessoa.nome.split(" ");
        Alert.alert(
            nome[0],
            'Deseja realmente sair?',
            [
                {
                    text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
                },
                {
                    text: 'Sair', onPress: () => {
                        navigate('login');
                        BackHandler.exitApp();
                    },

                }
            ],
            { cancelable: false }
        );
    };   


    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get("window").height;

        return (
            <View style={layout_logado.styles.sideMenuContainer}>

                <View style={layout_logado.styles.sideMenuFoto}>
                    <Image
                        source={{ uri: global.pessoa.image_home }}
                        style={layout_logado.styles.sideMenuProfileIcon}
                    />
                {/*     <Text style={layout_logado.styles.texto_menu}>

                        {this.state.nome}

                    </Text>
                    <Text style={layout_logado.styles.texto_11}>

                        {'Ag: ' + global.pessoa.agencia + ' C/C: ' + global.pessoa.conta + '-' + global.pessoa.digito}

                    </Text>

                    {global.pessoa.mostrar ? (<Text style={layout_logado.styles.texto_11}>

                        {'Empresa: ' + global.pessoa.razao_social}

                    </Text>) : null} */}
                </View>

                <View style={{ width: '100%', }}>{card_info_cliente_menu(global.pessoa)}</View>
                
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: layout_logado.fundo_view,
                        marginTop: 5,
                    }}
                />


                <ScrollView showsVerticalScrollIndicator={false} style={{width:'92%'}}>
                    <View style={layout_logado.styles.sideMenuItens}>
                        <View style={{ width: '100%', maxWidth:'80%', alignSelf:'flex-start' }}>

                            {this.items.map((item, key) => {

                                if (item.nav == 'sair') {

                                    return (

                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                paddingTop: 30,
                                                paddingBottom: 20
                                            }}
                                            onPress={() => {
                                                this._sair();
                                            }}
                                            key={key}>


                                            <View style={{ alignSelf: 'center', width: 30 }}>
                                               {/*  <Icon name={item.icon} size={25} color={layout_logado.icones_menu_expandido} /> */}
                                               {item.iconeMenu}
                                            </View>
                                            <View style={{ padding: 2 }} />
                                            <View style={{ alignItems: 'center' }}>
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                        color: layout_logado.texto_menu,
                                                        textAlign: 'auto'
                                                    }}
                                                >
                                                    {item.nome}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    );

                                } else {
                                    return (

                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                paddingTop: 10,
                                                paddingBottom: 10
                                            }}
                                            key={key}
                                            onPress={() => {
                                                global.currentScreenIndex = key;
                                                this.props.navigation.navigate(item.nav);
                                            }}
                                        >


                                            <View style={{ alignSelf: 'center', width: 30 }}>
                                                {/* <Icon name={item.icon} size={23} color={layout_logado.icones_menu_expandido}/> */}
                                                {item.iconeMenu}
                                            </View>
                                            <View style={{ padding: 5 }} />
                                            <View style={{ alignItems: 'center' }}>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        color: layout_logado.texto_menu,
                                                        textAlign: 'auto'
                                                    }}
                                                >
                                                    {item.nome}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }


                            }
                            )}

                        </View>
                    </View>
                </ScrollView>
                <View style={{ padding: 3 }} />
            </View>
        );
    }
}