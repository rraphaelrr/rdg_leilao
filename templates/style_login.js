import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const layout_login = {

  styles: StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: Colors.cor_1,
    },

    texto_acessar: {
      color: Colors.cor_5,
    },

    botao_acessar: {
      width: 310,
      height: 50,
      borderRadius: 15,
      marginTop: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.cor_3,
      /* opacity: 0.7, */
    },

    ajuda_login: {
      width: 310,
      height: 50,
      borderRadius: 15,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderColor: Colors.cor_3,
      borderWidth: 1
      /* opacity: 0.7, */
    },

    texto_ajuda: {
      color: Colors.cor_3
    },

    modal_acessar: {
      backgroundColor: Colors.cor_3,
      opacity: 0.8,
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      padding: 10
    },

    inputBox: {
      width: '90%',
      backgroundColor: 'transparent',
      fontSize: 16,
      color: Colors.cor_5,
      paddingHorizontal: -3,
      maxHeight: 60,
      borderBottomWidth: 0.3, //tamanho da linha 
      borderColor: Colors.cor_5 //cor da linha 
    },

    btn_entrar: {
      width: 130,
      height: 30,
      borderRadius: 5,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.cor_3,
      borderColor: Colors.cor_3,
      borderWidth: 1,
      marginLeft: 195
      /* opacity: 0.7, */
    },

  }),

  //TextInput
  placeholder: Colors.cor_5,
  text: Colors.cor_5,
  primary: Colors.cor_5,



}

export default layout_login;