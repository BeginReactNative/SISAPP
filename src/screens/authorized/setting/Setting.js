import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header_Menu } from '../../../components/headers/Header_Menu';

class Setting extends Component {
    static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header:(navigation) => <Header_Menu {...navigation}/>
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color:'red'}}>Setting Screen</Text>
            </View>
        );
    }
}

export default Setting;