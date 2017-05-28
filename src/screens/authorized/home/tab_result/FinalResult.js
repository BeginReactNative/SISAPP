import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import styles from './ResultStyle';
import Graph from './GraphScore';

class FinalResult extends Component {
    
    render() { 
        return (
            <View style={styles.FinalResultContainer}>

                <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />

                <View style={styles.StudentInfoStyle}>
                    <View style={styles.StudentStatusStyle}>
                        <Text style={{ fontWeight: 'bold' }}> NGUYỄN TRUNG KIÊN</Text>
                        <Text>MSSV:20081450 | CNPM | K53</Text>
                        <Text>TRÌNH ĐỘ SINH VIÊN : NĂM 4</Text>
                        <Text>CHƯƠNG TRÌNH ĐÀO TẠO : KĨ SƯ ĐẠI TRÀ</Text>
                        <Text>TRẠNG THÁI : HỌC</Text>
                    </View>

                </View>

                <View style={styles.StudentResultStyle}>
                    <View style={styles.ResultStyle}>
                        <Text>TC ĐĂNG KÍ</Text>
                        <Text>144 TC</Text>
                    </View>
                    <View style={styles.ResultStyle2}>
                        <Text>TC NỢ</Text>
                        <Text>4 TC</Text>
                    </View>
                    <View style={styles.ResultStyle}>
                        <Text>TC ĐÀO TẠO</Text>
                        <Text>176 TC</Text>
                    </View>
                </View>
                <Graph />

            </View>
        );
    }
}

export default FinalResult;
