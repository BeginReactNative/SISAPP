import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
module.exports = StyleSheet.create({
    container: {
        flex: 1
    },
    FinalResultContainer: {
        flex: 1,
        
    },
    StudentInfoStyle: {
       
        backgroundColor: 'transparent',
        alignItems: 'center',
        
        height: height * 0.2,
        paddingTop: 30
    },
    StudentStatusStyle: {
       
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    StudentResultStyle: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    ResultStyle: {
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height * 0.12


    },
      ResultStyle2: {
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height * 0.12,
        borderLeftColor: '#e0e0e0',
        borderRightColor: '#e0e0e0',
        borderLeftWidth: 1,
        borderRightWidth: 1

    },
    tongketContainer: {
        flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       
        
    },
    diemtongket: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.2,
         borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#fff',
     
    },
    danhgia: {
        flex: 3,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff',
   
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor: '#fff'
         
    },
    textstyle: {
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    }
});
