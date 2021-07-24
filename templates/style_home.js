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
      backgroundColor: Colors.cor_12,
    },

    header: {
      borderBottomColor: Colors.cor_2,
      borderWidth: 0.5,
      padding: 5,
      backgroundColor: Colors.cor_3,
      flexDirection: 'row'
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
      flexDirection: 'row'
    },

    btn_home: {
      borderColor: Colors.cor_3,
      borderWidth: 1,
      width: 130,
      height: 50,
      marginLeft: 5,
      justifyContent: 'center',
      backgroundColor: Colors.cor_3,
      alignSelf: 'center',
      borderRadius: 5,
    },

    text_home: {
      textAlign: 'center',
      /* fontWeight: 'bold', */
      fontSize: 17
    },



  }),

}

export default layout_home;