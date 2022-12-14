import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const deviceWidth = Dimensions.get("window").width / 2 + 32;
const width = Dimensions.get("window").width / 3.2;

const deviceHeight = Dimensions.get("window").height;

const SLIDER_WIDTH = Dimensions.get('window').width;

const layout_home = {

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

    view_title_home: {
      marginBottom: 10,
      marginTop: 20
    },

    title_home: {
      textAlign: 'center',
      color: Colors.cor_3,
      fontSize: 18
    },

    opc_home: {
      flexDirection: 'row',
      justifyContent: 'center'
    },

    btn_home: {
      borderColor: Colors.cor_5,
      borderWidth: 1,
      width: 120,
      height: 110,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: 'center',
      backgroundColor: Colors.cor_3,
      alignSelf: 'center',
      borderRadius: 5,
      marginBottom: 5,
      marginTop: -90,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,

    },

    text_home: {
      textAlign: 'center',
      /* fontWeight: 'bold', */
      fontSize: 17
    },

    caixa_saldo: {
      width: '98%',
      backgroundColor: Colors.cor_3,
      padding: 8,
      borderRadius: 30,
      alignContent: 'center',
      alignSelf: 'center',
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      borderColor: Colors.cor_5,
      borderWidth: 1
    },

    texto_saldo_conta_digital: {
      color: Colors.cor_5,
      fontSize: 15,
    },

    sifrao_saldo_conta_digital: {
      fontSize: 15,
      color: Colors.cor_5,
      alignItems: 'baseline',
      marginTop: 8,
      fontWeight: 'bold'
    },

    valor_saldo_conta_digital: {
      fontSize: 23,
      color: Colors.cor_5,
      marginRight: -10,
      /* fontWeight: 'bold' */
    },

    icone_olho_saldo: {
      fontSize: 23,
      color: Colors.cor_5,
      marginRight: 25,

    },

    iconsRapidos: {
      textAlign: 'center',
      fontSize: 40,
      marginBottom: 15
    }



  }),

}

export default layout_home;