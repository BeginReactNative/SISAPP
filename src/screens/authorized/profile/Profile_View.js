import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Profile_View extends Component {
  
    render() {
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={this.props.goto}>
                    <Text> Go to detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Profile_View;

