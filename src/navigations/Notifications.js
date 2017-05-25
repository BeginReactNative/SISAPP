import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NotificationScreen from '../screens/authorized/notifications/Notifications';

const NotificationNavigator = StackNavigator({
    Notification: {
        screen: NotificationScreen,
    }
})
export default NotificationNavigator;