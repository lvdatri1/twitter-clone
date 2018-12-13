import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Image from 'react-native-image-progress';
import * as Progress from "react-native-progress";

export default class MyImage extends Component {
  render() {
    return (
      <Image {...this.props}  indicator={Progress.CircleSnail}>

      </Image>
    )
  }
}
