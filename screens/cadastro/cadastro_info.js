import React, { Component } from 'react';
import Text from '../../componentes/text';
import { BackHandler, ScrollView, Animated, StatusBar, AppRegistry, View, TouchableOpacity, FlatList, ImageBackground, Alert, Dimensions, Image, Easing } from 'react-native';
/* import Icon from 'react-native-vector-icons/FontAwesome'; */
import layout_cadastro from '../../templates/style_cadastro';
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

export default class cadastro_info extends Component {
    constructor(props) {
        super(props);
        /* global.digital = 10.00 */
        this.state = {

        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={layout_cadastro.styles.container} source={Objetos.imagem_fundo}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={layout_cadastro.styles.header}>
                        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                            navigate('login')
                        }}>
                            {Objetos.logo}
                        </TouchableOpacity>
                    </View>
                    <View style={layout_cadastro.styles.img_cadastro_info}>
                        {Objetos.imgcadastro}
                    </View>
                    <View >
                        <Text style={layout_cadastro.styles.texto_cadastro_info}>
                            {'Cadastre para poder acessar o Rotas do Garimpo\n e aproveitar todos os recursos disponiveis!'}
                        </Text>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', }}>
						<TouchableOpacity style={layout_cadastro.styles.btn_info} onPress={() => navigate('cadastro_dados')}>
							<Text style={layout_cadastro.styles.btn_text_info}>{'Cadastrar'}</Text>
						</TouchableOpacity>
					</View>

                </ScrollView>
            </ImageBackground>

        );
    }
}


AppRegistry.registerComponent('cadastro_info', () => cadastro_info);