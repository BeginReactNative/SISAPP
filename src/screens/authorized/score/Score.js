import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import Accordion from 'react-native-collapsible/Accordion';
import { connect } from 'react-redux';
import { fetchDataScore } from '../../../actions/fetchActions';
import { Header_Menu } from '../../../components/headers/Header_Menu';
import SortScore from '../../../components/Score/SortScore';

import styles from './ScoreStyle';
import data1 from '../../../demo_data/DemoScore';

const { width } = Dimensions.get('window');
class Score extends Component {
    static navigationOptions = ({ navigation }) => ({
        //tabBarIcon: ({ focused }) => (focused ? HomeIcon : HomeIconWhite),
        headerLeft: <Header_Menu {...navigation} />,
        title: <Text style={{ color: 'black' }}> Bảng Điểm </Text>,
        headerStyle: {
            backgroundColor: 'rgb(106, 57, 171)'
        }
    })
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
                    <View style={{ width: (width * 0.3) }} />
                    <Text>Số TC</Text>
                    <Text>Điểm</Text>
                </View>


            </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />
                <TouchableOpacity style={styles.button} onPress={this.props.fetchDataScore}>
                    <Text>Click Me</Text>
                </TouchableOpacity>
                <View style={styles.mainContent}>
                    {
                        this.props.data.isFetching && <Text>Loading</Text>
                    }
                    {
                        this.props.data.data.length ? (
                            this.props.data.data.map((person, i) => <View key={i}>
                                <Text>Name: {person.kyhoc} </Text>
                              
                            </View>)
                        ) : null
                    }


                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.fetchReducer
    };
};
export default connect(mapStateToProps, { fetchDataScore })(Score);

/**
 * <Accordion
                    sections={data1}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
 */
