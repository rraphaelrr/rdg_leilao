import React from 'react';
import {
  Text,
} from 'react-native';

import * as Font from 'expo-font';

export default class CustomText extends React.Component {
  constructor(props) {
    super(props);
  }

  async loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      'comicz': require('../assets/fonts/comicz.ttf'),

      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Montserrat-Regular': {
        uri: require('../assets/fonts/Montserrat-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

    });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    return (
      <Text style={[{ fontFamily: 'Montserrat-Regular', fontSize: 12 }, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

