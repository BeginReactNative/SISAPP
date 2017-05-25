import React, { Component } from 'react';
import { View, WebView,Text } from 'react-native';
class News_Detail extends Component {

    render() {
        return (
            <WebView
                source={{ uri: this.props.navigation.state.params.linka }}
                style={{ margin: 10 }}
            />
        );
    }
}

export default News_Detail;