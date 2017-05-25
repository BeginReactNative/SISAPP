import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/authorized/profile/Profile';
import ChangeInfoScreen from '../screens/authorized/profile/ChangeInfo';

const ProfileNavigator = StackNavigator({
    Profile: {
        screen: ProfileScreen,
    },
    Change_Info : {
        screen: ChangeInfoScreen
    }
})
export default ProfileNavigator;