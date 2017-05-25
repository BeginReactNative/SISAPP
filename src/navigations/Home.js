import React, { Component } from 'react';
import { Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import Tab_News from './TabNews';
import Tab_Result from '../screens/authorized/home/tab_result/Result';
import Tab_Contact from '../screens/authorized/home/tab_contact/Contact';

const Home = TabNavigator({
    Tab_News: {
        screen: Tab_News,
        navigationOptions: {
            tabBarLabel: 'Tin tức',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/news.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    Tab_Result: {
        screen: Tab_Result,
        navigationOptions: {
            tabBarLabel: 'Kết quả',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/results.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
    TabContact: {
        screen: Tab_Contact,
        navigationOptions: {
            tabBarLabel: 'Liên hệ',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../img/icon/contact.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            ),
        }
    },
},{
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            tabs: {
                Tab_News: {
                    barBackgroundColor: '#37474F',
                },
                Tab_Result: {
                    barBackgroundColor: '#00796B'
                },
                Tab_Contact: {
                    barBackgroundColor: '#e0e0e0',
                      // activeLabelColor: '#212121',
                       //activeIcon: <Icon size={24} color="#212121" name="contact" />
                }
            }
        }
    }
});
const styles = {
    icon: {
        width: 24,
        height: 24
    }
};
export default Home;