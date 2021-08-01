import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width / 3.2;

const deviceHeight = Dimensions.get("window").height;

const SLIDER_WIDTH = Dimensions.get('window').width;

const layout_cadastro = {

    styles: StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: Colors.cor_3,
        },

        header: {
            borderBottomColor: Colors.cor_5,
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: Colors.cor_3,
            flexDirection: 'row',
            justifyContent: 'center'
        },

        img_cadastro_info: {
            marginTop: 40,
            alignItems: 'center'
        },

        texto_cadastro_info: {
            textAlign: 'center',
            fontSize: 15
        },

        btn_info: {
            width: 294,
            height: 39,
            borderRadius: 15,
            margin: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.cor_5,
            /* borderColor: Colors.cor_3, */
            /* borderWidth: 1 */
            /* opacity: 0.7, */
        },

        btn_text_info: {
            color: Colors.cor_3,
            fontSize: 17
        },

        view_title_dados: {
            margin: 60,
            fontSize: 20,
            textAlign: 'center',
            color: Colors.cor_5,
            fontWeight: "bold"
        },

        inputBox: {
            width: '90%',
            backgroundColor: 'transparent',
            fontSize: 16,
            color: Colors.cor_5,
            paddingHorizontal: -3,
            maxHeight: 60,
            borderBottomWidth: 0.3, //tamanho da linha 
            borderColor: Colors.cor_5, //cor da linha 

        },

        btn_dados: {
            width: 294,
            height: 39,
            borderRadius: 15,
            /* margin: 1, */
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.cor_5,
            /* borderColor: Colors.cor_3, */
            /* borderWidth: 1 */
            /* opacity: 0.7, */
        },

        btn_text_dados: {
            color: Colors.cor_3,
            fontSize: 17
        },

        inputBox2: {
            width: '80%',
            backgroundColor: 'transparent',
            fontSize: 16,
            color: Colors.cor_2,
            paddingHorizontal: -3,
            maxHeight: 60,
            borderBottomWidth: 0.3, //tamanho da linha 
            borderColor: Colors.cor_4 //cor da linha 
        },

        view_title_endereco: {
            marginTop: 60,
            marginBottom: 30,
            fontSize: 20,
            textAlign: 'center',
            color: Colors.cor_5,
            fontWeight: "bold"
        },

        text_end: {
            marginTop: 20,
            marginBottom: 30,
            fontSize: 14,
            textAlign: 'center',
            color: Colors.cor_5,
            fontWeight: "bold"
        },

        version: {
            marginTop: 150,
            textAlign: 'center'
        }
    }),


    //TextInput
    placeholder: Colors.cor_5,
    text: Colors.cor_5,
    primary: Colors.cor_5,

    cor_borda_rnpicker: Colors.cor_5,

    texto_geral_picker: Colors.cor_5,
}

export default layout_cadastro;