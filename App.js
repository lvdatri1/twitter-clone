import React, { Component } from "react";
import { StyleSheet, Image, Button } from "react-native";
import getTheme from "./native-base-theme/components";
import platform from "./native-base-theme/variables/platform";
import material from "./native-base-theme/variables/material";
import { createStackNavigator, 
  createAppContainer, 
  createDrawerNavigator,
  DrawerItems, 
  SafeAreaView } from "react-navigation";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import ProfileScreen from "./screens/profile";
import TweetDetailsScreen from "./screens/tweetDetails";
import { Root, Icon, Container, Content, List, ListItem, Text } from "native-base";
import TestScreen from './screens/TestScreen';
import { Provider } from "react-redux";
import store from "./store";
import "regenerator-runtime/runtime";
import NBCard from './components/NBCard';
import SideMenu from './components/SideMenu';
// console.disableYellowBox = true;


const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Login: {
    screen: LoginScreen,

  },
  Profile: {
    screen: ProfileScreen,
  },
  Test: {
    screen: TestScreen,
  },
  TweetDetails: {
    screen: TweetDetailsScreen,
  }
}, {
    initialRouteName: 'Login',
    headerMode: "none",

  });

const AppNavigator = createAppContainer(RootStack);


export default class App extends Component {
  constructor() {
    super();

  }

  componentWillMount() {
  }



  render() {

    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-create" style={{ color: "#4286f4" }} />
    ),
  };

  render() {
    return (
      <Container>
      <Content>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="Menu"
      />
      <NBCard />

      </Content>
      </Container>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-create" style={{ color: "#4286f4" }} />
    ),
  };

  render() {
    return (
      <Content>
      <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="Menu"
      />
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />

      </Content>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
  Home: {
    screen: MyHomeScreen   
     },
  Notifications: {
    screen: MyNotificationsScreen,
  },
  Twitter: {
    screen: AppNavigator,
  },

  Test: {
    screen: TestScreen,
  },

}
,{
  initialRouteName: 'Test',
  drawerPosition: 'left',
  // contentOptions: cOptions,
  contentComponent: SideMenu,
  backBehavior : "none",
});

const MyApp = createAppContainer(MyDrawerNavigator);

const cOptions = {
  items: ['Home', 'Test', ],
  onItemPress: (route)=>{
    console.log('in route', route);
    this.props.navigation.navigate(route);
  },
  activeTintColor: '#e91e63',
  itemsContainerStyle: {
    marginVertical: 0,
  },
  iconContainerStyle: {
    opacity: 1
  }
};




class CustomDrawerContentComponent extends Component {
  constructor(props){
super(props);
console.log('in menu props', props);
  }
  render() {
    <Container>
        <Content>
        <TouchableHighlight onPress={()=>this.props.navigation.toggleDrawer()}>

          <Image
            source={{
              uri: "https://cdn.dribbble.com/users/175813/screenshots/1333276/bloggerheasder.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}/>
            
          </TouchableHighlight>

           
                
                <Button onPress={()=>this.props.navigation.navigate('Home')}>heiihi</Button>


              
          
        </Content>
      </Container>
  }
}

