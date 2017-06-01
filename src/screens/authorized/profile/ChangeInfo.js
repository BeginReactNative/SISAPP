import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header_Home } from '../../../components/headers/Header_Home';

class ChangeInfo extends Component {
  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'red' }}>ChangeInfo Screen</Text>
            </View>
        );
    }
    
};
export default ChangeInfo;
