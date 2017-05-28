import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import styles from './ResultStyle';
import Graph from './GraphScore';

class Result extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />

               
                <View style={styles.StudentInfoStyle}>
                   
                    <View style={styles.StudentStatusStyle}>
                        <Text style={[styles.textstyle, { fontWeight: 'bold' }]}> NGUYỄN TRUNG KIÊN</Text>
                        <Text style={styles.textstyle}>MSSV:20081450 | CNPM | K53</Text>
                        <Text style={styles.textstyle}>TRÌNH ĐỘ SINH VIÊN : NĂM 4</Text>
                        <Text style={styles.textstyle}>CHƯƠNG TRÌNH ĐÀO TẠO : KĨ SƯ ĐẠI TRÀ</Text>
                        <Text style={styles.textstyle}>TRẠNG THÁI : HỌC</Text>
                    </View>

                </View>

                <View style={styles.StudentResultStyle}>
                    <View style={styles.ResultStyle}>
                        <Text >TC ĐĂNG KÍ</Text>
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
                <View style={styles.tongketContainer}>
                    <View style={styles.danhgia}>
                        <Text style={styles.textstyle}>ĐÁNH GIÁ</Text>
                        <Text style={styles.textstyle}>Hoàn thành 78% chương trình đào tạo.</Text>
                        <Text style={styles.textstyle}>Chú ý trả các học phần còn nợ !</Text>
                    </View>
                    <View style={styles.diemtongket}>
                        <Text style={styles.textstyle}>CPA:</Text>
                        <Text style={styles.textstyle}>2.78</Text>
                    </View>
                </View>

            </View>
        );
    }
}

export default Result;
