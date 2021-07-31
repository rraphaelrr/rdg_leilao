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

export default class cadastro_endereco extends Component {
    constructor(props) {
        super(props);
        /* global.digital = 10.00 */
        this.state = {
            nome: '',
            cpf: '',
            email: '',
            nascimento: '',
            sexo: 0,
            celular: '',
        }
    }
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('cadastro_info');
            return true;
        });
    };

  /*   validar_campos = () => {
        if (this.state.nome == '') {
            Alert.alert('Nome é Obrigatorio')
        } else if (this.state.cpf == '') {
            Alert.alert('CPF é Obrigatorio')
        } else if (this.state.email == '') {
            Alert.alert('E-Mail é Obrigatorio')
        } else {
            this.props.navigation('cadastro_endereco')
        }
    } */

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

                    {/* <View style={{ width: '100%', alignItems: 'center', marginTop: 20, top: -20, padding: 10 }}>
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
                            label='Nome Completo*'
                            returnKeyType={"next"}
                            onChangeText={nome => this.setState({ nome })}
                            /* onSubmitEditing={() => this.nomemae.focus()} 
                            ref={ref => {
                                this.nome = ref;
                            }}
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

                        <TextInput style={layout_cadastro.styles.inputBox}
                            disabled={this.state.disabled}
                            value={this.state.email}
                            mode='flat'
                            theme={{
                                colors: {
                                    placeholder: layout_cadastro.placeholder,
                                    text: layout_cadastro.text,
                                    primary: layout_cadastro.primary,
                                },

                            }}
                            underlineColorAndroid={'transparent'}
                            underlineColor={'transparent'}
                            label='E-Mail*'
                            keyboardType="email-address"
                            onChangeText={email => this.setState({ email })}

                        />

                        <TextInput style={layout_cadastro.styles.inputBox}
                            value={this.state.nascimento}
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
                                        mask: "99/99/9999"
                                    }}
                                    ref={ref => this.nascimento = ref}
                                />
                            }
                            returnKeyType={"next"}
                            keyboardType="numeric"
                            label='Data de nascimento'
                            onChangeText={nascimento => this.setState({ nascimento })}
                        />

                        <View style={layout_cadastro.styles.inputBox}>
                            <Text style={{ color: layout_cadastro.cor_borda_rnpicker, bottom: -15 }}>Sexo</Text>
                            <RNPickerSelect style={{
                                ...pickerSelectStyles,
                                iconContainer: {
                                    // top: 1,
                                    left: 0,
                                },
                                placeholder: {
                                    fontSize: 16,
                                },
                            }}
                                placeholder={{
                                    label: 'Gênero',
                                    value: "",
                                }}
                                onChangeText={sexo => this.setState({ sexo })}
                                onValueChange={(sexo) => this.setState({ sexo })}
                                value={this.state.sexo}
                                items={[
                                    { label: 'Feminino', value: 'Feminino' },
                                    { label: 'Masculino', value: 'Masculino' },
                                    { label: 'Outros', value: 'Outros' },
                                    { label: 'Prefiro Não Dizer', value: 'Prefiro Não Dizer' },
                                ]}
                            />
                        </View>

                        <TextInput style={layout_cadastro.styles.inputBox}
                            value={this.state.celular}
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
                                        mask: "(99)99999-9999"
                                    }}
                                    ref={ref => this.celular = ref}
                                />
                            }
                            placeholder={"(00)00000-0000"}
                            returnKeyType={"next"}
                            keyboardType="numeric"
                            // maxLength={14}
                            label='Celular'
                            onChangeText={celular => this.setState({ celular })}

                        />



                    </View>

                    <View style={{ width: '100%', alignItems: 'center', }}>
                        <TouchableOpacity style={layout_cadastro.styles.btn_dados} onPress={() => this.validar_campos()}>
                            <Text style={layout_cadastro.styles.btn_text_dados}>{'Continuar'}</Text>
                        </TouchableOpacity>
                    </View> */}

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


AppRegistry.registerComponent('cadastro_endereco', () => cadastro_endereco);