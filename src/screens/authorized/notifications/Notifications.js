import React, { Component } from 'react';
import { View, Text, TocuableOpacity } from 'react-native';
import { Header_Menu } from '../../../components/headers/Header_Menu';

class Notification extends Component {
   static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        headerLeft: (navigation) => < Header_Menu {...navigation} />
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               

                 <Text style={{ color: 'red' }}>Notification Screen</Text>

             
            </View>
        );
    }
}

export default Notification;
