import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ScoreScreen from '../screens/authorized/score/Score';

const ScoreNavigator = StackNavigator({
    Score: {
        screen: ScoreScreen,
    }
})
export default ScoreNavigator;