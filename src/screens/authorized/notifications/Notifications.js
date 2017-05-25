import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header_Home } from '../../../components/headers/Header_Home';

class Notification extends Component {
   static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header:(navigation) => <Header_Home {...navigation}/>
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color:'red'}}>Notification Screen</Text>
            </View>
        );
    }
}

export default Notification;