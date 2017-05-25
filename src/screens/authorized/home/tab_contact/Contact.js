import React, { Component } from 'react';
import { View, Text,Image, Dimensions } from 'react-native';
class Contact extends Component {
   
    render() {
        return (
            <View style={{ flex: 1}}>
               <View style={styles.map}>
                   <Image source={require('../../../../img/icon/bkmap copy.png')} style={styles.imgMap}/>
               </View>
               <View style={styles.info_container}>
                   <View style={styles.info}>
                       <Image source={require('../../../../img/icon/User Location Filled.png')}
                              style={styles.icon} />
                       <Text style={styles.textStyle}>Số 01, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</Text>
                   </View>
                   <View style={styles.info}>
                       <Image source={require('../../../../img/icon/User Location Filled.png')}
                              style={styles.icon} />
                       <Text style={styles.textStyle}>043888888</Text>
                   </View>
                   <View style={styles.info}>
                       <Image source={require('../../../../img/icon/ Message Filled.png')}
                              style={styles.icon} />
                       <Text style={styles.textStyle}>admin.hust.edu.vn</Text>
                   </View>
                   <View style={styles.info}>
                       <Image source={require('../../../../img/icon/User Location Filled.png')}
                              style={styles.icon} />
                       <Text style={styles.textStyle}>09899999999</Text>
                   </View>
               </View>
            </View>
        );
    }
}
const { width,height } = Dimensions.get('window')
const styles = {
    map: {
        flex: 1,
        margin: 10,
    },
    info_container : {
        flex: 1,
        margin: 10
    },
    info: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBotthomColor: '#e0e0e0'
    },
    textStyle: {
        fontFamily: 'Avenir',
        fontSize :12,
        color: '#696969',
        fontWeight: 'bold'
    },
    icon: {
        width: 20,
        height: 20
    },
 imgMap: {
     width: (width - 20),
     height: height * 0.45
 }
}
export default Contact;