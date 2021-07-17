import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import * as Font from 'expo-font';
import { View, ImageBackground, Text, StatusBar } from 'react-native';
import * as Updates from 'expo-updates';
import Objetos from './constants/objetos';
import Colors from './constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
	BallIndicator,
	BarIndicator,
	DotIndicator,
	MaterialIndicator,
	PacmanIndicator,
	PulseIndicator,
	SkypeIndicator,
	UIActivityIndicator,
	WaveIndicator,
} from 'react-native-indicators';


import login from './screens/login/login';
import home from './screens/home/home';



const mainNavigation = createAnimatedSwitchNavigator(
	{
		
		login,
		home
		
	},
	{
		transition: (
			<Transition.Together>
				<Transition.Out
					type="slide-right"
					durationMs={200}
					interpolation="easeIn"
				/>
				<Transition.In type="fade" durationMs={200} />
			</Transition.Together>
		),
	},
);

const App = createAppContainer(mainNavigation);
export default class Appp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			load: false
		}
	}

	loadFonts = async () => {
		await Font.loadAsync({
			'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
		}).then(() => this.atualizacao())
	}

	atualizacao = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();
			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			} else {
				this.setState({ load: true });
			}
		} catch (e) {
			this.setState({ load: true });
		}
	};

	componentDidMount() {
		this.loadFonts();
	}



	render() {
		if (this.state.load == false) {
			return (
				<ImageBackground style={{ backgroundColor: Colors.cor_1, width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center' }} source={Objetos.imagem_fundo} >

					<View style={{ height: 40 }}>
						<DotIndicator size={20} color={Colors.cor_2} />
					</View>
					<View>
						<Text style={{ color: Colors.cor_2, fontSize: 15 }}>{'Carregando...'}</Text>
					</View>

				</ImageBackground>
			)
		} else {
			return (
				<SafeAreaView style={{ flex: 1, backgroundColor: Objetos.cor_statusbar }} edges={['top',]}>
					<StatusBar hidden={false} backgroundColor={Objetos.cor_statusbar} />
					<App />
				</SafeAreaView>
			)
		}
	}
}
