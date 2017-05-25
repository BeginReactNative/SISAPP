import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import News_List from '../screens/authorized/home/tab_news/News_List';
import News_Detail from '../screens/authorized/home/tab_news/News_Detail';
import News_List_Header from '../components/headers/Header_Home';

const NewsNavigation = StackNavigator({
    News_List: { screen: News_List  },
    News_Detail: { screen: News_Detail },
});
export default NewsNavigation;