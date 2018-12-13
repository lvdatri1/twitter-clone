import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Tab,
  Tabs,
  Root,
  Toast,
  Drawer
} from "native-base";
import NBCard from "../components/NBCard";
import { ScrollView, FlatList } from "react-native";
import { NavigationEvents } from "react-navigation";
// import MySideBar from '../components/MySideBar';
// import DrawerTest from '../components/DrawerTest';
import { connect } from "react-redux";
import { DrawerStack } from "react-navigation";
import axios from "axios";
// import LoginScreen from './login';
// import HomeScreen from './home';
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import Image from "react-native-image-progress";
import * as Progress from "react-native-progress";
import MyImage from "../components/MyImage";
import MyMap from '../components/MyMap';

export default class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [], page: 1, isLoading: false };
    this.loadingPeople = this.loadingPeople.bind(this);
  }
  componentDidMount() {
    this.loadingPeople();
  }
  _keyExtractor = (item, index) => item.email;
  _renderItem = ({ item }) => <NBCard id={item.id} data={item} />;
  loadingPeople() {
    console.log("inside enreach");
    this.setState({ ...this.state, isLoading: true });
    axios
      .get(
        "https://randomuser.me/api/?results=10&seed=abc&page=" + this.state.page
      )
      .then(result => {
        this.setState({
          isLoading: false,
          people: this.state.people.concat(result.data.results),
          page: this.state.page + 1
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <Root>
        <Container>
          <Header hasTabs>
            <Left>
              <Button
                onPress={() => this.props.navigation.toggleDrawer()}
                transparent
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Tabs>
              <Tab heading="Tab2">
                <Video
                  controls
                  source={{
                    uri:
                      "https://d3a519wjc57hdm.cloudfront.net/2018/12/08/8715343-1544235784.mp4"
                  }}
                  style={{
                    height: 200
                  }}
                />
                <VideoPlayer
                  showOnStart
                  navigator={this.props.navigator}
                  source={{
                    uri:
                      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                  }}
                  style={{
                    height: 200
                  }}
                />
              </Tab>
              <Tab heading="Tab3">
                <Button
                  light
                  onPress={() =>
                    Toast.show({
                      text: "Wrong password!",
                      buttonText: "Okay"
                    })
                  }
                >
                  <Text>events 3</Text>
                </Button>

  <MyMap />

                <NavigationEvents
                  onWillFocus={payload => console.log("will focus", payload)}
                  onDidFocus={payload => console.log("did focus", payload)}
                  onWillBlur={payload => console.log("will blur", payload)}
                  onDidBlur={payload => console.log("did blur", payload)}
                />
                <Image
                  source={{ uri: "http://loremflickr.com/1200/200/dog" }}
                  indicator={Progress.Circle}
                  style={{
                    height: 240
                  }}
                />
                <MyImage
                  source={{ uri: "http://loremflickr.com/700/300/dog" }}
                  style={{
                    height: 240
                  }}
                />
              </Tab>
            </Tabs>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Root>
    );
  }
}
