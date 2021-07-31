import React, { Component } from 'react';
import Text from '../../componentes/text';
import { BackHandler, ScrollView, Animated, StatusBar, AppRegistry, View, TouchableOpacity, FlatList, ImageBackground, Alert, Dimensions, Image, Easing } from 'react-native';
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
import { sair } from '../../constants/funcoes';
import Layout from '../../constants/Layout'
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width - 70);

export default class cadastro_dados extends Component {
    constructor(props) {
        super(props);
        /* global.digital = 10.00 */
        this.state = {
            nome: '',
            cpf: '',
            email: '',
            nascimento: '',
            sexo: '',
            telefone: '',
        }
    }
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('cadastro_info');
            return true;
        });
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={layout_cadastro.styles.container} source={Objetos.imagem_fundo}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={layout_cadastro.styles.header}>
                        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                            navigate('login')
                        }}>
                            {Objetos.logo}
                        </TouchableOpacity>
                    </View>
                    <View >
                        <Text style={layout_cadastro.styles.view_title_dados}>{'Entre com seus dados pessoais!'}</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20, top: -20, padding: 10 }}>
                        <TextInput style={layout_cadastro.styles.inputBox}
                            value={this.state.nome}
                            mode='flat'
                            theme={{
                                colors: {
                                    placeholder: layout_cadastro.placeholder,
                                    text: layout_cadastro.text,
                                    primary: layout_cadastro.primary,
                                }
                            }}
                            underlineColorAndroid={'transparent'}
                            underlineColor={'transparent'}
                            returnKeyType={"next"}
                            label='Nome*'
                            keyboardType="email-address"
                            onChangeText={userEmail => this.setState({ userEmail: userEmail })}
                            onSubmitEditing={() => this.senha.focus()}
                        />

                        <TextInput style={layout_cadastro.styles.inputBox}
                            value={this.state.cpf}
                            mode='flat'
                            theme={{
                                colors: {
                                    placeholder: layout_cadastro.placeholder,
                                    text: layout_cadastro.text,
                                    primary: layout_cadastro.primary,
                                }
                            }}
                            underlineColorAndroid={'transparent'}
                            underlineColor={'transparent'}
                            render={props =>
                                <TextInputMask
                                    {...props}
                                    type={'custom'}
                                    options={{
                                        mask: "999.999.999-99"
                                    }}
                                    ref={ref => this.cpf = ref}
                                />
                            }
                            maxLength={14}
                            // returnKeyType={"next"}
                            keyboardType="numeric"
                            label='CPF*'
                            onChangeText={cpf => this.setState({ cpf })}
                        />
                    </View>

                </ScrollView>
            </ImageBackground>

        );
    }
}


AppRegistry.registerComponent('cadastro_dados', () => cadastro_dados);