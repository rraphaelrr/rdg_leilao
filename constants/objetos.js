import React from 'react';
import Layout from './Layout';
import Text from '../componentes/text';
import { Image, Linking, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from './Colors';
import Info from './info';
import { Video } from 'expo-av';


export default {
    imglogin: <Image source={require('../assets/images/login2.jpg')} />,
    logologin: <Image source={require('../assets/images/logo2.png')} style={Layout.sizelogin} />,
    logo: <Image source={require('../assets/images/logo.png')} style={Layout.sizeheader} />,

    imgcadastro: <Image source={require('../assets/images/cadastro.png')} style={Layout.sizecadastro} />,

    bannerhome: <View><Image source={require('../assets/images/bannerhome.png')} style={Layout.sizetestecard} /></View>,
};