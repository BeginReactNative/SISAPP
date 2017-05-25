import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
const { height } = Dimensions.get('window')
class SortScore extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.sortOption}>
                    <TouchableOpacity>
                        <Text>Điểm</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.sortOption}>
                    <TouchableOpacity>
                        <Text>Kỳ</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sortOption}>
                    <TouchableOpacity>
                        <Text>Khoa Viện</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                );
    }
}
const styles = {
                    container: {
                    height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sortOption: {
                    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#696969'
    }
}
export default SortScore;