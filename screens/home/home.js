import React, { Component } from 'react';
import Text from '../../componentes/text';
import { ScrollView, Animated, StatusBar, AppRegistry, View, TouchableOpacity, FlatList, ImageBackground, Alert, Dimensions, Image, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import layout_home from '../../templates/style_home';
import Info from '../../constants/info';
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


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>{'Hello World'}</Text>
                <TouchableOpacity onPress={() => navigate('login')}>
                    <Text >{'Voltar'}</Text>
                </TouchableOpacity>
            </View>

        );
    }
}


AppRegistry.registerComponent('home', () => home);