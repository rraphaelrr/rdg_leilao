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

import { SliderBox } from "react-native-image-slider-box";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class login extends Component {

	

	render() {
		

		return (
			<ScrollView>
				<KeyboardAvoidingView behavior="position" enabled>
					<ImageBackground style={layout_login.styles.container}>
						<View>
							<Text style={layout_login.styles.texto_inicio}>{'Hello World'}</Text>
						</View>
					</ImageBackground>
				</KeyboardAvoidingView>
			</ScrollView>
		)

	}
}

AppRegistry.registerComponent('login', () => login);


