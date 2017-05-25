import React, { Component } from 'react';
import { View, Text } from 'react-native';
class Login extends Component {
   
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color:'red'}}>Login Screen</Text>
            </View>
        );
    }
}

export default Login;