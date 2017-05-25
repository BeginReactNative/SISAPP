import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Root from './src/navigations/Authorized';
import Test from './src/TestScreen';
import Test2 from './src/screens/authorized/score/ScoreList';
class App extends Component {
    componentDidMount(){
        StatusBar.setHidden(true);
    }
    render() {
        return (
         <Root />
            
        );
    }
}

export default App;
