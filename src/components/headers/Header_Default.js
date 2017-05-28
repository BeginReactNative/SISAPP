import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity, Image,Button
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

class ButtonLeft extends Component {

    render() {
       
        return (
	      	<TouchableOpacity >
			<Button title='new-message' color='black' size={25} />
		    </TouchableOpacity>
	    );
       
    }
}



export default ButtonLeft;
