import React, { Component } from 'react';
import Text from '../../componentes/text';
import { ScrollView, Linking, Animated, StatusBar, AppRegistry, View, TouchableOpacity, ImageBackground, Image, Alert, KeyboardAvoidingView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-paper';
import layout_login from '../../templates/style_login';
import Info from '../../constants/info';
import Produtos from '../../constants/Produtos';
import Objetos from '../../constants/objetos';
import Modal from "react-native-modal";
import * as LocalAuthentication from 'expo-local-authentication';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Device from 'expo-device';
import { CheckBox } from 'react-native-elements';
import { Audio, Video } from 'expo-av';
import Colors from '../../constants/Colors';

import { SliderBox } from "react-native-image-slider-box";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class cadastro extends Component {
    
    render() {
        return (
            <View >
                <Text>{'Hello World Test'}</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('cadastro', () => cadastro);