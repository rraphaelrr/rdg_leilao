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

export default class cadastro_documentos extends Component {
    constructor(props) {
        super(props);
        /* global.digital = 10.00 */
        this.state = {
            numerorg: '',
            datarg: '',
            orgaorg: '',
            ufrg: '',
        }
    }
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('cadastro_info');
            return true;
        });
    };
    /* 
        validar_campos = () => {
            if (this.state.cep == '') {
                Alert.alert('CEP é Obrigatorio')
            } else {
                this.props.navigation.navigate('cadastro_documentos');
            }
        } */

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground style={layout_cadastro.styles.container} source={Objetos.imagem_fundo}>

                <View style={layout_cadastro.styles.header}>
                    <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => {
                        navigate('login')
                    }}>
                        {Objetos.logo}
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View >
                        <Text style={layout_cadastro.styles.view_title_endereco}>{'Preencha com os dados de Documento'}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

                        <TextInput style={layout_cadastro.styles.inputBox}
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
                            label='Número do RG'
                            returnKeyType={"next"}
                            value={this.state.numerorg}
                            onChangeText={numerorg => this.setState({ numerorg })}
                            onSubmitEditing={() => { this.datarg.getElement().focus() }}
                        />

                        <TextInput style={layout_cadastro.styles.inputBox}
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
                            value={this.state.datarg}
                            render={props =>
                                <TextInputMask
                                    {...props}
                                    type={'custom'}
                                    options={{
                                        mask: "99/99/9999"
                                    }}
                                    ref={ref => this.datarg = ref}
                                />
                            }
                            returnKeyType={"next"}
                            keyboardType="numeric"
                            label='Data de emissão'
                            onChangeText={datarg => this.setState({ datarg })}
                            onSubmitEditing={() => this.orgaorg.focus()}
                        />

                        <TextInput style={layout_cadastro.styles.inputBox}
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
                            value={this.state.orgaorg}
                            label='Órgão expedidor'
                            onChangeText={orgaorg => this.setState({ orgaorg })}
                            ref={(input) => { this.orgaorg = input; }}
                        />

                        <View style={layout_cadastro.styles.inputBox}>
                            <Text style={{ color: layout_cadastro.cor_borda_rnpicker, bottom: -15 }}>Estado</Text>
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
                                    label: 'opções',
                                    value: 0,
                                    //color: 'red',
                                }}
                                onChangeText={ufrg => this.setState({ ufrg })}
                                onValueChange={(ufrg) => this.setState({ ufrg })}
                                value={this.state.ufrg}
                                items={[


                                    { label: "AC", value: "AC", key: 0 },
                                    { label: "AL", value: "AL", key: 1 },
                                    { label: "AM", value: "AM", key: 2 },
                                    { label: "AP", value: "AP", key: 3 },
                                    { label: "BA", value: "BA", key: 4 },
                                    { label: "CE", value: "CE", key: 5 },
                                    { label: "DF", value: "DF", key: 6 },
                                    { label: "ES", value: "ES", key: 7 },
                                    { label: "GO", value: "GO", key: 8 },
                                    { label: "MA", value: "MA", key: 9 },
                                    { label: "MT", value: "MT", key: 10 },
                                    { label: "MS", value: "MS", key: 11 },
                                    { label: "MG", value: "MG", key: 12 },
                                    { label: "PA", value: "PA", key: 13 },
                                    { label: "PB", value: "PB", key: 14 },
                                    { label: "PR", value: "PR", key: 15 },
                                    { label: "PE", value: "PE", key: 16 },
                                    { label: "PI", value: "PI", key: 17 },
                                    { label: "RJ", value: "RJ", key: 18 },
                                    { label: "RN", value: "RN", key: 19 },
                                    { label: "RS", value: "RS", key: 20 },
                                    { label: "RO", value: "RO", key: 21 },
                                    { label: "RR", value: "RR", key: 22 },
                                    { label: "SC", value: "SC", key: 23 },
                                    { label: "SP", value: "SP", key: 24 },
                                    { label: "SE", value: "SE", key: 25 },
                                    { label: "TO", value: "TO", key: 26 },
                                ]}

                                Icon={() => {
                                    return (
                                        <View
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderTopWidth: 10,
                                                borderTopColor: layout_cadastro.icones_adicionais,
                                                borderRightWidth: 10,
                                                borderRightColor: 'transparent',
                                                borderLeftWidth: 10,
                                                borderLeftColor: 'transparent',
                                                width: 0,
                                                height: 0,
                                                right: 0,
                                                position: 'absolute'
                                            }}
                                        />
                                    );
                                }}
                            />
                        </View>

                    </View>



                    <View style={{ width: '100%', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={layout_cadastro.styles.btn_dados} onPress={() => navigate('cadastro_finalizado')}>
                            <Text style={layout_cadastro.styles.btn_text_dados}>{'Finalizar'}</Text>
                        </TouchableOpacity>
                    </View>

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


AppRegistry.registerComponent('cadastro_documentos', () => cadastro_documentos);