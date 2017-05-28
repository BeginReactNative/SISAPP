import React, { Component } from 'react';
import { Image } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import TabHome from './Home';
import Profile from './Profiles';
import Score from './Score';
import TableTime from './TableTime';
import Setting from './Setting';
import Notifications from './Notifications'
import Logout from '../screens/authorized/logout/Logout';
import DrawerItems from '../components/drawer/DrawerItems';

const Authorized = DrawerNavigator({
    Home: {
        screen: TabHome,
        navigationOptions: {
            drawerLabel: 'Trang chủ',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/Home Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            drawerLabel: 'Thông tin sinh viên',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/User Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }

    },
    Score: {
        screen: Score,
        navigationOptions: {
            drawerLabel: 'Bảng Điểm',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/Property Time Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
            
        }
    },
    TableTime: {
        screen: TableTime,
        navigationOptions: {
            drawerLabel: 'Thời Khoá Biểu',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/Report Card Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    Notification: {
        screen: Notifications,
        navigationOptions: {
            drawerLabel: 'Thông báo',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/Appointment Reminders Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            drawerLabel: 'Cài Đặt',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/Settings Filled.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    //Logout: { screen: Logout },

},
    {

        contentComponent: props => <DrawerItems {...props} />

    });
const styles = {
    icon: {
        width: 25,
        height: 25
    }
}
export default Authorized;