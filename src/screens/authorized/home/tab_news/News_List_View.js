import React, { Component } from 'react';
import {
    View, Text, Image, FlatList,
    SectionList, Button,
    TouchableOpacity
} from 'react-native';
//import {data} from '../../../../demo_data/DemoNews';
import Shimmer from 'react-native-shimmer';
import styles from '../../../../components/news/News_Style';
import AutoTypingText from 'react-native-auto-typing-text';
import _ from 'lodash';

var data = require('../../../../demo_data/DemoNews');
// Convert key tu API ve giong voi key dinh dang cua SectionList
data = _.groupBy(data, DATA => DATA.category)
data = _.reduce(data, (news, next, index) => {
    news.push({
        key: index,
        data: next,
    })
    return news
}, [])

class News_List_View extends Component {
    renderItem = (item) => {
        return (
            <TouchableOpacity

                style={styles.row}

                activeOpacity={0.7}
                onPress= {this.props.goto}
            >

                <Image source={{ uri: item.item.image }} style={styles.imageBackground}>
                    {/* Title */}
                    
                    <AutoTypingText
                        text={item.item.title.toUpperCase()}
                        charMovingTime={80}
                        delay={0}
                        style={[styles.text, styles.title]}
                        onComplete={() => { console.log('done'); }}
                    />
                    {/* Rating */}
                    <View style={{ padding: 5, backgroundColor: 'transparent' }}>
                        <Text style={[styles.text, styles.value, { color: 'red' }]}>{item.item.time}</Text>
                        <Text style={[styles.text, styles.value]} numberOfLines={2} >
                            {item.item.description}
                        </Text>
                    </View>
                </Image>
            </TouchableOpacity>
        )
    };
    renderSectionHeader = (headerItem) => {
        return (
            
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{headerItem.section.key.toUpperCase()}</Text>
           
        )
    }
 constructor(props) {
            super(props);
            goDetail: this.props
        }
    render() {
       
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <SectionList
                    
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={data}
                    keyExtractor={(item) => item.title}
                />

              
            </View>
        );
    }
}

export default News_List_View;