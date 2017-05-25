import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import data from '../../../demo_data/DemoScore';
class ScoreList extends Component {
    _renderItem = ({ item }) => {
        for (var i = 0; i < data.length; i++) {
            var temp = item.chitiet[i];
          return (
                    <Text>{ temp.tenmon}</Text>
                         
          )
            
        }
      

    }
    render() {
        
        return (
            
            <FlatList
                data={data}
                renderItem={this._renderItem}
            />
        );
    }
}

export default ScoreList;
