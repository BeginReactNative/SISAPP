import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TableTimeScreen from '../screens/authorized/tabletime/TableTime';

const TableTimeNavigator = StackNavigator({
    TableTime: {
        screen: TableTimeScreen,
    }
})
export default TableTimeNavigator;