import React from "react";
import { AppRegistry, Image, StatusBar, TouchableHighlight } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Test", "Notifications", "Twitter"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
        

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
            
        
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
          
        </Content>
      </Container>
    );
  }
}