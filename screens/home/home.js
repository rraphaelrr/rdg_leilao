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

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width - 70);

export default class home extends Component {

    _sair = () => {
        const { navigate } = this.props.navigation;

        navigate('login'); 
    };   




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
                                {Icon.sair}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={layout_home.styles.view_title_home}>
                        <Text style={layout_home.styles.title_home}>{'Escolha a Sala que quer Acessar'}</Text>
                    </View>
                    <View style={layout_home.styles.opc_home}>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'Comum'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'VIP'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity style={layout_home.styles.btn_home} >
                                <Text style={layout_home.styles.text_home}>{'Premium'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>

        );
    }
}


AppRegistry.registerComponent('home', () => home);