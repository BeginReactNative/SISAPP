import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AutoTypingText from 'react-native-auto-typing-text';
class Test extends Component {
    state = {}
    render() {
        var texta = 'abczxy dep trai'
        return (
            <View style={{flex:1}} >
            <Text numberOfLines={3}>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
            </View>
        );
    }
}

export default Test;