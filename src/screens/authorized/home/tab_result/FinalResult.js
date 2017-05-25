import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../Home/HeaderFinalResult';
import styles from './ResultStyle';
import Graph from '../ResultStudent/GraphScore';
class FinalResult extends Component {
    
    render() {
       
        return (
            <View style={styles.FinalResultContainer}>

                <Header />
                <View style={styles.StudentInfoStyle}>
                    <Image
                        source={ require ('../../media/temp/download.jpeg')}
                        style={{
                            position: 'absolute',
                            top: -50,
                            height: 80,
                            width: 80
                        }}
                    />
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
