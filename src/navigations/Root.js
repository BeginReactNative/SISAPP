import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

const RootNavigation = StackNavigator({
    Unauthorized: { screen: ''},
    Authorized: { screen: ''}
},{
    headerMode: 'screen',    
    navigationOptions: {
       
        header: null
    }
})
export default RootNavigation;
