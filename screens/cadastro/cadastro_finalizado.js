import React, { Component } from 'react';
import Text from '../../componentes/text';
import { BackHandler, ScrollView, Animated, StatusBar, AppRegistry, View, TouchableOpacity, FlatList, ImageBackground, Alert, Dimensions, Image, Easing, StyleSheet } from 'react-native';
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
import { TextInput } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import QRCode from 'react-native-qrcode-svg';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-community/async-storage';
import * as Location from 'expo-location';
import RNPickerSelect from 'react-native-picker-select';
import Layout from '../../constants/Layout'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width - 70);

export default class cadastro_documentos extends Component {
    constructor(props) {
        super(props);
        /* global.digital = 10.00 */
        this.state = {
            numerorg: '',
            datarg: '',
            orgaorg: '',
            ufrg: '',
        }
    }
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('cadastro_info');
            return true;
        });
    };
    /* 
        validar_campos = () => {
            if (this.state.cep == '') {
                Alert.alert('CEP é Obrigatorio')
            } else {
                this.props.navigation.navigate('cadastro_documentos');
            }
        } */

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={layout_cadastro.styles.container} source={Objetos.imagem_fundo}>

                <View style={layout_cadastro.styles.header}>
                    <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                        navigate('login')
                    }}>
                        {Objetos.logo}
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View >
                        <Text style={layout_cadastro.styles.view_title_endereco}>{'Parabéns, Você finalizou seu Cadastro!'}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Text style={layout_cadastro.styles.text_end}>{'Logo você recebera um E-Mail dizendo se sua conta foi aprovada'}</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={layout_cadastro.styles.btn_dados} onPress={() => navigate('login')}>
                            <Text style={layout_cadastro.styles.btn_text_dados}>{'Inicio'}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </ImageBackground>

        );
    }
}


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        bottom: -10,
        left: -8,
        color: layout_cadastro.texto_geral_picker,
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 0,
        paddingVertical: 1,
        left: -8,
        color: layout_cadastro.texto_geral_picker,
        paddingRight: 30,
    },
});


AppRegistry.registerComponent('cadastro_documentos', () => cadastro_documentos);