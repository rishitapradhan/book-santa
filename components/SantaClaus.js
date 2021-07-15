import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/book-santa.json')}
      style={{width:"80%"}}
      autoPlay loop />
    )
  }
}