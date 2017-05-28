import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ScoreScreen from '../screens/authorized/score/Score';
import { Header_Menu } from '../components/headers/Header_Menu';

const ScoreNavigator = StackNavigator({
    Score: {
        screen: ScoreScreen,
      
    }
});
export default ScoreNavigator;
