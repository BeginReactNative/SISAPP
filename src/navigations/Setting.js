import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import SettingScreen from '../screens/authorized/setting/Setting';

const SettingNavigator = StackNavigator({
    Setting: {
        screen: SettingScreen,
    }
})
export default SettingNavigator;