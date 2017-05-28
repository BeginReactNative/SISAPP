import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatarStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 20
    },
    generalInfoStyle: {
        height: height * 0.38,
        width: width - 40,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    viewBetween: {
        borderWidth: 1,
        height: 50,
        borderColor: '#fff'

    },
    headerInfo: {
        height: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
    },
    InfoStyle: {
        margin: 10,
        justifyContent: 'space-between'
    },
    textStyle: {
        fontSize: 15,
        fontFamily: 'Avenir',

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    }
});
