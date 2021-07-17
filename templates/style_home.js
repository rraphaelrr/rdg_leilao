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
      backgroundColor: Colors.cor_1,
    },

  }),

}

export default layout_home;