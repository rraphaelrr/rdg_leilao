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
import cadastro from './screens/cadastro/cadastro'
import home from './screens/home/home';



const mainNavigation = createAnimatedSwitchNavigator(
	{
		
		login,
		cadastro,
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
		
	}

	loadFonts = async () => {
		await Font.loadAsync({
			'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
		}).then(() => this.render())
	}

	

	componentDidMount() {
		this.loadFonts();
	}



	render() {
		
			return (
				<SafeAreaView style={{ flex: 1, backgroundColor: Objetos.cor_statusbar }} edges={['top',]}>
					<StatusBar hidden={false} backgroundColor={Objetos.cor_statusbar} />
					<App />
				</SafeAreaView>
			)
		
	}
}
