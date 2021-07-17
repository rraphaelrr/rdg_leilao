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

    texto_inicio: {
      color: Colors.cor_3,
    }

  }),


 

}

export default layout_login;