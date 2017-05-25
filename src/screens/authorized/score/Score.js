import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList,Dimensions } from 'react-native';
import { Header_Home } from '../../../components/headers/Header_Home';
import SortScore from '../../../components/Score/SortScore';
import Accordion from 'react-native-collapsible/Accordion';
import styles from './ScoreStyle';
import data from '../../../demo_data/DemoScore';
import ListScore from './ScoreList';
const {width, height } = Dimensions.get('window')
class Score extends Component {
    static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header: (navigation) => <Header_Home {...navigation} />
    }
    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Image source={require('../../../img/icon/DownArrow.png')} style={styles.dropDownIcon} />
                <Text style={styles.headerText}>Ky {section.kyhoc}</Text>
            </View>
        );
    }

    _renderContent(section) {
            

        return (
            <View style={styles.content}>
                <View style={styles.SecTitle}>
                    <Text>Tên HP</Text>
                    <View style={{width: (width * 0.3)}} />
                    <Text>Số TC</Text>
                    <Text>Điểm</Text>
                </View>
                <ListScore />
                
            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SortScore />
                <Accordion
                    sections={data}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </View>
        );
    }
}


export default Score;