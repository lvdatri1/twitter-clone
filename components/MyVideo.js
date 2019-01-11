import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'

export default class MyVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { play: true };
    this.onPressVideo = this.onPressVideo.bind(this);


  }
  onPressVideo() {
    alert('click on video' + this.state.play);
    this.setState({
      ...this.state,
      play: !this.state.play
    });

  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.onPressVideo}>
        <Video {...this.props}
          pause={this.state.play}
          repeat={true}


        />
      </TouchableOpacity>
    )
  }
}
