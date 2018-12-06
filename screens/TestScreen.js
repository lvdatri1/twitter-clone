import React, { Component } from 'react';
import { Container, Header, Title, 
    Content, Footer, 
    FooterTab, Button, 
    Left, Right, Body, 
    Icon, Text,
    List, ListItem,
    Tab, Tabs, Drawer } from 'native-base';
    import NBCard from '../components/NBCard';
    import { ScrollView, FlatList } from 'react-native';
    import { NavigationEvents } from 'react-navigation';
    // import MySideBar from '../components/MySideBar';
    // import DrawerTest from '../components/DrawerTest';
    import { connect } from "react-redux";
    import { DrawerStack } from 'react-navigation';
    import axios from "axios";
// import LoginScreen from './login';
// import HomeScreen from './home';

   


      export default class TestScreen extends Component {
        constructor(props){
          super(props);
          this.state = {people: [], page: 1, isLoading: false};
this.loadingPeople = this.loadingPeople.bind(this);

        }
        componentDidMount(){
          this.loadingPeople();
        }
        _keyExtractor = (item, index) => item.email;
        _renderItem = ({item}) => (
          <NBCard
            id={item.id}
            data={item}
            
            
          />
        );
        loadingPeople(){
          console.log('inside enreach');
          this.setState({...this.state, isLoading: true});
          axios.get('https://randomuser.me/api/?results=10&seed=abc&page=' + this.state.page)
          .then(
            result =>{
              
              this.setState({isLoading: false, people: this.state.people.concat(result.data.results), page: this.state.page+1});

            }
          )
          .catch(error=>{
            alert(error);
          });
          

        }

  render() {
    
    return (
    
      <Container>         
        <Header hasTabs>
          <Left>
            <Button onPress={()=>this.props.navigation.toggleDrawer()} transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        
          
        <Tabs>
          
          <Tab heading="Tab2">
          
       
          <FlatList
        data={this.state.people}
        
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this.loadingPeople}
        onEndReachedThreshold={0.8}
      />

          </Tab>
          <Tab heading="Tab3">
          <Button light><Text>events 3</Text></Button>
          <NavigationEvents
      onWillFocus={payload => console.log('will focus',payload)}
      onDidFocus={payload => console.log('did focus',payload)}
      onWillBlur={payload => console.log('will blur',payload)}
      onDidBlur={payload => console.log('did blur',payload)}
    />
          </Tab>
        </Tabs>
        
        
        
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        
        </Footer>
        
        </Container>
        
   
    );
  }
}

