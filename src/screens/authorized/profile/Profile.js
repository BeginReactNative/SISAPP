import React, { Component } from 'react';
import { View, Text, Image,Button } from 'react-native';
import { Header_Home } from '../../../components/headers/Header_Home';
import Profile_View from './Profile_View';

class Profile extends Component {
     static navigationOptions = {
        
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header:(navigation) => <Header_Home {...navigation}/>
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text>AAAAA</Text>
             <Profile_View goto={() => {this.props.navigation.navigate('Change_Info')}}/>
             </View>
        );
    }
    
};


export default Profile;