import React, { Component } from 'react';
import Text from '../../componentes/text';
import { BackHandler, ScrollView, Animated, StatusBar, AppRegistry, View, TouchableOpacity, FlatList, ImageBackground, Alert, Dimensions, Image, Easing } from 'react-native';
/* import Icon from 'react-native-vector-icons/FontAwesome'; */
import layout_home from '../../templates/style_home';
import Info from '../../constants/info';
import Icon from '../../constants/icons';
import { formatReal, botoes_home_layout } from '../../constants/funcoes';
import Produtos from '../../constants/Produtos';
import Objetos from '../../constants/objetos';
import { NavigationEvents } from 'react-navigation';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { ProgressBar } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import QRCode from 'react-native-qrcode-svg';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-community/async-storage';
import * as Location from 'expo-location';
import { sair } from '../../constants/funcoes';
import Layout from '../../constants/Layout'
import Icon2 from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width - 70);

export default class home extends Component {
    constructor(props) {
        super(props);
        global.digital = 10.00
        this.state = {
            valor_saldo: '__,__',
            olho: 'eye-slash',

        }
    }

    _sair = () => {
        const { navigate } = this.props.navigation;

        navigate('login');
    };

    mostrar_valor = () => {
        if (this.state.valor_saldo == '__,__') {
            this.setState({
                valor_saldo: parseFloat(global.digital),
                olho: 'eye'
            })

        } else {
            this.setState({
                valor_saldo: '__,__',
                olho: 'eye-slash'
            })
        }
    };

    componentDidMount = () => {
        global.digital = formatReal(global.digital);
    }




    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={layout_home.styles.container} source={Objetos.imagem_fundo}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={layout_home.styles.header}>
                        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                            Alert.alert('teste')
                        }}>
                            {Objetos.logo}

                        </TouchableOpacity>
                        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                            this._sair();
                        }}>
                            <View style={{ paddingTop: 30 }}>
                                {Icon.menu}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={layout_home.styles.caixa_saldo} >
                        <Text style={layout_home.styles.texto_saldo_conta_digital}>{'Saldo RDG Coin'}</Text>
                        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => this.mostrar_valor()}
                            style={{ right: 0, position: 'absolute', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={layout_home.styles.sifrao_saldo_conta_digital}>{'R$ '}</Text>
                            <Text style={layout_home.styles.valor_saldo_conta_digital}>{this.state.valor_saldo + '    '}</Text>
                            <Icon2 name={this.state.olho} size={24} style={layout_home.styles.icone_olho_saldo} />
                        </TouchableOpacity>
                    </View>
                    <View >
                        {Objetos.bannerhome}
                    </View>
                    <View style={layout_home.styles.view_title_home}>
                        <Text style={layout_home.styles.title_home}>{'Seja Bem Vindo ao ' + Info.nome + '! \n Escolha o que Deseja Acessar'}</Text>
                    </View>
                    <View style={layout_home.styles.opc_home}>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'Leilão'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'E-Commerce'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={layout_home.styles.opc_home}>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'Conversor $'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'Pedidos'}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }
}


AppRegistry.registerComponent('home', () => home);