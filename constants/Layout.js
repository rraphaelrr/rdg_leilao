import React, { Component } from 'react';
import Text from '../componentes/text';
import {Dimensions, StyleSheet } from 'react-native';
import  Colors from './Colors';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },

  sizelogoprimeiro:{
    
    width: width,
    height: height / 8,
  },

  sizepeticon: {
    width: 150,
    height: 131,
  },

  sizepetcabecalho:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  isSmallDevice: width < 375,

  sizetestecard: {
    width: width,
    height: height / 4,
  },

  sizeico:{
    width :90,
    height : 90,
  },

  sizelogin:{
    width: 250,
		height: 230,
  },

  sizesimulador:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizecadastro:{
    width:218,
    height: 250, 
  },

  sizeextrato:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },
  sizedeposito:{
    width: width,
    height: height / 2.2,
    resizeMode: 'center',
  },

  sizedepositotransferencia:{
    width: width,
    height: height / 2.4,
    resizeMode: 'center',
  },


  sizebeneficios:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizebeneficios2:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },
  cambioimg:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizeprodutosbancarios:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizecobrar:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizedesenvolvimento:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },
  sizemimos:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },
  cambioimg:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizerecarga:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },
  sizechat:{
    width : width,
    height : height/4,
    //resizeMode : 'center',
  },

  sizeheader:{
    width : 200,
    height : 90,
    //resizeMode : 'center',
  },

  sizemaquininha:{
    width : 370,
    height : 187,
    //resizeMode : 'center',
  },

  sizecartoes:{
    width : 370,
    height : 250,
    resizeMode : 'center',
  },

 

  sizedrawer:{
    width : 40,
    height : 40,
    
  },
 
  sizeicoo:{
    width :45,
    height : 15,
  },


stylecabecalho:{
  width:'100%',
  height:height/11,
  justifyContent: 'center', 
  backgroundColor: Colors.cor_1,
  alignItems: 'center', 
  flexDirection: 'row',
  borderBottomWidth: 0.3, //tamanho da linha 
	borderColor: Colors.cor_2
  
},

corsecundaria: {
  color: '#fff',
},

textogeral: {
  color: '#fff',
},

textosecundario: {
  color: '#ff6d5f',

},

botaocontinuar: {
  color: '#ff6d5f',
},

botaovoltar: {
  color: '#ff6d5f',
},
botaosair: {
  color: '#ff6d5f',
},

};
