import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ImageSlider from 'react-native-image-slider';
const images = [
  'https://placeimg.com/640/640/nature',
  'https://placeimg.com/640/640/people',
  'https://placeimg.com/640/640/animals',
  'https://placeimg.com/640/640/beer',
  'https://d3a519wjc57hdm.cloudfront.net/2018/12/08/8715343-1544235784.mp4',
];
const styles = {
  styles: { height: 200, flex: 1 },
  customImage: { height: 200, flex: 1 },
  customSlide: { height: 200, flex: 1 },

};
import MyVideo from '../components/MyVideo';
import VideoPlay from 'react-native-video-controls';
import Video from 'react-native-video';
export default class CardImageExample extends Component {
  render() {
    const { data } = this.props;
    console.log('here is data', data);

    return (

      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: data.picture.thumbnail }} />
            <Body>
              <Text>{data.email}</Text>
              <Text note>{data.name.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image source={{uri: data.picture.large}} style={{height: 200, width: null, flex: 1}}/> */}
          <ImageSlider
            images={images}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                {item.search('mp4') > -1 ? <MyVideo source={{ uri: item }}
                  style={styles.customImage} /> :
                  <Image source={{ uri: item }} style={styles.customImage} />}
              </View>
            )}
          />


        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>

    );
  }
}

