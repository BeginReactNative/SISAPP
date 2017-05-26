import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AnimatedLinearGradient , { presetColors } from 'react-native-animated-linear-gradient';
import { Header_Home } from '../../../components/headers/Header_Home';
import Profile_View from './Profile_View';


class Profile extends Component {
    static navigationOptions = {

        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header: (navigation) => <Header_Home {...navigation} />
    }
    render() {
        return (

            <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />

        );
    }
}

export default Profile;

/**
 *  <Profile_View goto={() => { this.props.navigation.navigate('Change_Info') }} />
 */
