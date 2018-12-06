import React, { Component } from 'react';
import { Drawer, Content, Button, Text } from 'native-base';
import SideBar from './MySideBar';
export default class DrawerTest extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      // Main View
      <Content>
          <Button light></Button>
          
        </Content>
      </Drawer>
    );
  }
}