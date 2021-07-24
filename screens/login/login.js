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
			btn_acessar: true,
			modal_acessar: false,
			userEmail: '',
			userPassword: '',
			hidePassword: true,
		}
	}

	componentDidMount = () => {
		console.log(this.state.userEmail)
	}

	login = () => {
		if(this.state.userEmail == ''){
			Alert.alert('Preencha as Credencias para Entrar!')
		} else if (this.state.userPassword == '') {
			Alert.alert('Preencha as Credencias para Entrar!')
		}else {
			this.props.navigation.navigate('home')
			/* Alert.alert('Erro') */
		}
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
						<View style={{ width: '100%', alignItems: 'center', marginTop: 20, top: -20, padding: 10 }}>
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
									onChangeText={userEmail => this.setState({ userEmail: userEmail })}
								onSubmitEditing={() => this.senha.focus()}
								/>
								<TextInput style={layout_login.styles.inputBox}
									value={this.state.userPassword}
									mode='flat'
									theme={{
										roundness: 5,
										colors: {
											placeholder: layout_login.placeholder,
											text: layout_login.text,
											primary: layout_login.primary,

										}
									}}
									underlineColorAndroid={'transparent'}
									underlineColor={'transparent'}
									returnKeyType={"next"}
									label='Senha'
									maxLength={6}
									onChangeText={userPassword => this.setState({ userPassword })}
									keyboardType="numeric"
									secureTextEntry={this.state.hidePassword}
									ref={ref => { this.senha = ref}}
								/>
								<TouchableOpacity style={layout_login.styles.btn_entrar} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => this.login()}>
									<Text style={layout_login.styles.texto_entrar}>{'Entrar'}</Text>
								</TouchableOpacity>

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


