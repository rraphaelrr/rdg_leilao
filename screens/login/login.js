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
export default class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btn_acessar: false,
			modal_acessar: true,
			userEmail: '',
		}
	}

	componentDidMount = () => {
		console.log(this.state.userEmail)
	}




	render() {
		const { navigate } = this.props.navigation;
		return (

			<KeyboardAvoidingView style={layout_login.styles.container} behavior="position" enabled>
				<ImageBackground style={layout_login.styles.container} source={require('../../assets/images/login1.jpg')}>
					<View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
						{Objetos.logologin}
					</View>
					{this.state.btn_acessar ? (
						<View style={{ width: '100%', alignItems: 'center', }}>
							<TouchableOpacity style={layout_login.styles.botao_acessar} onPress={() => this.setState({ btn_acessar: false, modal_acessar: true })}>
								<Text style={layout_login.styles.texto_acessar}>{'Acessar'}</Text>
							</TouchableOpacity>
						</View>
					) : null}
					{this.state.modal_acessar ? (
						<View style={{ width: '100%', alignItems: 'center', marginTop: 10, top: -20, padding: 10 }}>
							<View style={layout_login.styles.modal_acessar}>
								<TextInput style={layout_login.styles.inputBox}
									value={this.state.userEmail}
									mode='flat'
									theme={{
										colors: {
											placeholder: layout_login.placeholder,
											text: layout_login.text,
											primary: layout_login.primary,
										}
									}}
									underlineColorAndroid={'transparent'}
									underlineColor={'transparent'}
									returnKeyType={"next"}
									label='Email'
									keyboardType="email-address"
									onChangeText={userEmail => this.setState({ userEmail })}
								/* onSubmitEditing={() => this.senha.focus()} */
								/>
								<Text>{this.state.userEmail}</Text>
							</View>
						</View>
					) : null}
					<View style={{ width: '100%', alignItems: 'center', }}>
						<TouchableOpacity style={layout_login.styles.ajuda_login} onPress={() => navigate('home')}>
							<Text style={layout_login.styles.texto_ajuda}>{'Ajuda'}</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</KeyboardAvoidingView>

		)

	}
}

AppRegistry.registerComponent('login', () => login);


