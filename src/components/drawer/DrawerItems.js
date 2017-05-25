import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

class DrawerItem extends Component {

    render() {
        const { container, avatar, info, wrapper, wrapperText } = styles
        return (
            <View style={container}>
                <View style = {wrapper}>
                    <Image
                        source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18119203_10207029383893032_9159228082315095214_n.jpg?oh=bb4b1f5f2c9f6a77058ad0dc245e85d8&oe=59B88EB2' }}
                        style={avatar} />
                        <View style={wrapperText}>
                    <Text style={info}> NGUYỄN TRUNG KIÊN</Text>
                    <Text style={info}> MSSV: 20081450</Text>
                    <Text style={info}> CNPM-K53</Text>
                    </View>
                </View>
                <DrawerItems {...this.props} />
                <Text style={[wrapperText,{color: 'red', margin: 30}]}>HUST APP VERSION: 1.0</Text>
            </View>
        );
    }
}
const styles = {
    container: {
        flex:1
    },
    wrapper: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapperText: {
     
      
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    info: {
        fontSize: 15,
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    }
}
export default DrawerItem;