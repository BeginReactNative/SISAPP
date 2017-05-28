import React, { PropTypes } from 'react';
import { TouchableOpacity, Image,
     StyleSheet,View,Text,
        Dimensions } from 'react-native';
const propTypes = {
    navigation: PropTypes.object.isRequired
};
const Header_Home = (navigation) => {
    return (
        <View style= {styles.container}>
       
            <Image source={require('../../img/icon/ic_menu.png')} style={styles.imgIcon} />
            <Image
                style={[styles.backgroundImage,StyleSheet.absoluteFill]}
                source={{ uri: 'https://dantri4.vcmedia.vn/IpvqqPNo8LbbZCFrwHAnH3aJqFylB/Image/2015/04/dai-hoc-bach-khoa-ha-noi-bao-gio-co-hieu-truong1429605052-96c71.jpg' }}
            />
          
            <View  style={styles.headerContainer} >
                 < TouchableOpacity onPress={() => navigation.navigation.navigate('DrawerOpen')}>
                <Image source={require('../../img/icon/ic_menu.png')} style={styles.imgIcon} />
                  </TouchableOpacity >
                
            </View>
            </View>
        
    );
}

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        height: (height* 0.1),
        padding: 20
        
       
        
    },
    imgIcon: {
       
        width: 32,
         height: 32,
         position: 'absolute',
         
    },
    backgroundImage: {
   
        height: (height * 0.1)
    },
    headerContainer: {
      
         backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    }
})
Header_Home.propTypes = propTypes;
export { Header_Home };