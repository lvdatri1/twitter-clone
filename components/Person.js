import React, { Component } from "react";
import Modal from "react-native-modalbox";
import Dimensions from "Dimensions";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Platform,
  StatusBar
} from "react-native";
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Title,
  Thumbnail,
  Col,
  Row,
  Grid,
  Icon,
  Spinner,
  Fab,
  Button,
  Footer,
  Input,
  Right
} from "native-base";
import { connect } from "react-redux";
import { fetchTweets } from "../actions/tweetsActions";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";

// const PersonContainer = connect()(Person);

export default class Person extends Component {
    constructor(props){
        super(props);
        console.log('this is in Person', this.props);
        this._handleClick = this._handleClick.bind(this);

    }
    componentDidMount(){
        if (this.props.inProfile===true){
//do something
        }
    }
    _handleClick (user){
            this.props.navigation.navigate("Profile", user);

    }
    _handleTweet (tweet){
        this.props.navigation.navigate("TweetDetails", tweet);
    }
  render() {
    const item = this.props.item;  
    return (
      <View style={styles.tweet}>
                      <TouchableHighlight
                        onPress={()=>this._handleClick(item.user)}
                        underlayColor="white"
                        activeOpacity={0.75}
                      >
                        <View style={{ flex: 1, flexDirection: "row" }}>
                          <Thumbnail source={{ uri: item.user.avatar }} />
                          <View
                            style={{
                              flexDirection: "column",
                              justifyContent: "flex-start"
                            }}
                          >
                            <Text
                              style={{
                                paddingLeft: 15,
                                fontWeight: "bold",
                                fontSize: 20
                              }}
                            >
                              {item.user.name}
                            </Text>

                            <Text
                              style={{
                                paddingLeft: 15,
                                color: "#aaa",
                                fontSize: 16
                              }}
                            >
                              {"@" + item.user.username}
                            </Text>
                          </View>
                        </View>
                      </TouchableHighlight>
                      <Text style={styles.tweetText}>{item.tweetContent}</Text>
                      <View style={styles.tweetFooter}>
                        <View style={styles.footerIcons}>
                          <Button
                            transparent
                            dark
                            onPress={()=>this._handleTweet(item)}
                          >
                            <Icon name="ios-text-outline" />
                            <Text style={styles.badgeCount}>{item.replies}</Text>
                          </Button>
                        </View>
                        <View style={styles.footerIcons}>
                          <Button transparent dark>
                            <Icon name="ios-repeat" />
                            <Text style={styles.badgeCount}>{item.retweets}</Text>
                          </Button>
                        </View>
                        <View style={styles.footerIcons}>
                          <Button transparent dark>
                            <Icon name="ios-heart-outline" />
                            <Text style={styles.badgeCount}>{item.likes}</Text>
                          </Button>
                        </View>
                        <View style={styles.footerIcons}>
                          <Button transparent dark>
                            <Icon name="ios-mail-outline" />
                          </Button>
                        </View>
                      </View>
                    </View>
    )
  }
}





const styles = StyleSheet.create({
    topMargin: {
      marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
      backgroundColor: "white",
      zIndex: -1
    },
    content: {
      padding: 10,
      backgroundColor: "white"
    },
    heading: {
      fontSize: 32,
      fontWeight: "400",
      marginBottom: 30
    },
    tweet: {
      paddingTop: 20,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: "column"
    },
    tweetText: {
      marginTop: 10,
      fontSize: 18,
      color: "#555"
    },
    tweetFooter: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
    },
    badgeCount: {
      fontSize: 12,
      paddingLeft: 5
    },
    footerIcons: {
      flexDirection: "row",
      alignItems: "center"
    },
    modalFooter: {
      backgroundColor: "white",
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 0.2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      height: 54,
      width: "100%",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 5
    },
    modal: {
      justifyContent: "flex-start",
      alignItems: "center",
      position: "absolute",
      zIndex: 4,
      elevation: 4,
      height: Dimensions.get("window").height - StatusBar.currentHeight,
      marginTop: StatusBar.currentHeight / 2
    }
  });
  