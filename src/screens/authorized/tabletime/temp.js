import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header_Home } from '../../../components/headers/Header_Home';
import Accordion from 'react-native-collapsible';
class Table_Time extends Component {
    static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header: (navigation) => <Header_Home {...navigation} />
    }
  
    render() {
        return (
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
       
          </View>
        );
    }
}


export default Table_Time;