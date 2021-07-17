import React, { Component } from 'react';
import Text from '../componentes/text';
import { Dimensions, StyleSheet, Alert, Clipboard, BackHandler, Share } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import env from '../env'
import Info from './info';
import Produtos from './Produtos';
/* import Clipboard from '@react-native-community/clipboard'; */

import { getInputRangeFromIndexes } from 'react-native-snap-carousel'; // 3.7.2

const SLIDER_WIDTH = Dimensions.get('window').width;
const TRANSLATE_VALUE = Math.round(SLIDER_WIDTH * 0.3 / 4);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function cpf_mask(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
};

export function cnpj_mask(cnpj) {
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
    return cnpj
};

export function TestaCPF(strCPF) {
    strCPF = strCPF.replace(/[^0-9]+/g, '');
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (var i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
};

export function TestaCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;


    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;


    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

};

export function formatReal(amount) {
    var decimalCount = 2;
    var decimal = ",";
    var thousands = ".";

    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

export function tarifas(variaveis) {

    console.log(variaveis);



    fetch(Info.ip + 'tarifa/consulta', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "chave": variaveis.chave,
            "conta_id": variaveis.conta_id,
        })

    })
        .then((response) => response.json())
        .then((responseJson) => {



            global.tarifaa = responseJson;





        })
        .catch((error) => {
            console.error(error);
        });

    let tarifa = 0; tarifa = global.tarifaa;
    console.log(tarifa);
    return tarifa;
};


export async function salvar_tela_pf(nome_tela) {

    console.log(nome_tela);
    try {
        global.continuar_cadastro_pf.nome_tela = nome_tela;

        try {
            const json = await AsyncStorage.setItem('continuar_cadastro_pf', JSON.stringify(global.continuar_cadastro_pf));
            console.log(json);
            console.log('tela: ' + nome_tela);
        }
        catch (erro) {
            return console.log(erro);
        }
    } catch (e) {
        console.log(e)
    }

};

export async function salvar_continuar_cadastro_pf(dados) {
    //console.log(dados);
    try {

        return AsyncStorage.setItem('continuar_cadastro_pf', JSON.stringify(dados))
            .then((json) => {
                console.log(json);
            })
            .catch(erro => console.log(erro));
    } catch (e) {
        console.log(e)
    }

};


export async function salvar_tela_pj(nome_tela) {

    console.log(nome_tela);
    try {
        global.continuar_cadastro_pf.nome_tela = nome_tela;

        try {
            const json = await AsyncStorage.setItem('continuar_cadastro_pj', JSON.stringify(global.continuar_cadastro_pj));
            console.log(json);
            console.log('tela: ' + nome_tela);
        }
        catch (erro) {
            return console.log(erro);
        }
    } catch (e) {
        console.log(e)
    }

};

export async function salvar_continuar_cadastro_pj(dados) {
    //console.log(dados);
    try {

        return AsyncStorage.setItem('continuar_cadastro_pj', JSON.stringify(dados))
            .then((json) => {
                console.log(json);
            })
            .catch(erro => console.log(erro));
    } catch (e) {
        console.log(e)
    }

};

export async function salvar_continuar_cadastro_pj_pf(dados) {
    //console.log(dados);
    try {

        return AsyncStorage.setItem('continuar_cadastro_pj_pf', JSON.stringify(dados))
            .then((json) => {
                console.log(json);
            })
            .catch(erro => console.log(erro));
    } catch (e) {
        console.log(e)
    }

};

export async function salvar_continuar_dados2(dados) {
    console.log('dados2 salvo');
    try {

        return AsyncStorage.setItem('continuar_dados2', JSON.stringify(dados))
            .then((json) => {
                console.log(json);
            })
            .catch(erro => console.log(erro));
    } catch (e) {
        console.log(e)
    }

};

//deixar a primeira letra em maiusculo
export function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
};


export function log_interno(log) {

    var msg = JSON.stringify(log)

    fetch(Info.ip + 'log/salvar-log', {
        method: 'post',
        header: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            mensagem: msg,
        })

    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch((error) => {
            console.log('log/salvar-log');
            console.log(error);
        });
};

export async function writeToClipboard(url) {
    await Clipboard.setString(url);
    Alert.alert('Dados copiados');
};


//funções dos cards saldo
export function scrollInterpolator(index, carouselProps) {
    const range = [1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return { inputRange, outputRange };
}

//funções dos cards saldo
export function animatedStyles(index, animatedValue, carouselProps) {
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    let animatedOpacity = {};
    let animatedTransform = {};

    if (carouselProps.inactiveSlideOpacity < 1) {
        animatedOpacity = {
            opacity: animatedValue.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [carouselProps.inactiveSlideOpacity, 1, carouselProps.inactiveSlideOpacity]
            })
        };
    }

    if (carouselProps.inactiveSlideScale < 1) {
        animatedTransform = {
            transform: [{
                scale: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [carouselProps.inactiveSlideScale, 1, carouselProps.inactiveSlideScale]
                }),
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [
                        TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
                        0,
                        -TRANSLATE_VALUE * carouselProps.inactiveSlideScale]
                }),
            }]
        };
    }

    return {
        ...animatedOpacity,
        ...animatedTransform
    };
}

export function botoes_home_layout() {
    var keys = Object.keys(Produtos.home);
    var Tamanho_key = keys.length;
    var soma = 0;
    var teste = [];
    var teste2 = [];

    for (var i = 0; i < Tamanho_key; i++) {

        teste.push(
            {
                key: Produtos.home[i].key,
                nav: Produtos.home[i].nav,
                nome: Produtos.home[i].nome,
                icon: Produtos.home[i].icon,
                icone: Produtos.home[i].icone,
                iconeMenu: Produtos.home[i].iconeMenu
            },
        )

        if (soma == 3) {
            teste2.push(
                teste
            );

            teste = [];
            soma = 0;

        } else {
            soma = soma + 1;
        }

    }

    if (soma == 1 || soma == 2 || soma == 3 || soma == 4 || soma == 5) {
        teste2.push(
            teste
        );
    }

    var keys2 = Object.keys(teste2);
    var Tamanho_key2 = keys2.length;

    return teste2;



}

export function sair(dados) {

    const navigate = dados.navigate;
    const dados_user = dados.sair_dados;

    var nome = dados_user.nome.split(" ");
    Alert.alert(
        nome[0],
        'Deseja realmente sair?',
        [
            {
                text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
            },
            {
                text: 'Sair', onPress: () => {
                    navigate('login');
                    BackHandler.exitApp();

                },

            }
        ],
        { cancelable: false }
    );
};

export async function onShare(url) {
    try {
        const result = await Share.share({
            message:
                url,
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
        }
    } catch (error) {
        alert(error.message);
    }
};
