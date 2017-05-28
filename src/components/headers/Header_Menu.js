import React, { PropTypes } from 'react';
import {
    TouchableOpacity, Image,
    StyleSheet, View,
    Dimensions
} from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import { Text } from 'react-native';

const propTypes = {
    navigation: PropTypes.object.isRequired
};
const Header_Menu = (navigation) => (
    <View style={styles.container}>
        
        < TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../../img/icon/ic_menu.png')} style={styles.imgIcon} />
        </TouchableOpacity >
       
    </View>

);

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
     
        margin : 10,
        justifyContent: 'center',
        alignItems: 'center'
        

    },
    imgIcon: {

        width: 32,
        height: 32,
        

    },
    headerContainer: {

        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});
Header_Menu.propTypes = propTypes;
export { Header_Menu };
