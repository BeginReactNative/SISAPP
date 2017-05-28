import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Chart from 'react-native-chart';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';


const { height, width } = Dimensions.get('window');
class GraphScore extends Component {

    render() {
        return (
            <View style={styles.container}>
                                <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />

                <Chart
                    style={styles.chart}
                    data={data2}
                    showGrid={false}
                    type={'line'}
                    showDataPoint={true}
                    color={'red'}
                   yAxisWidth={15}
                    
                />
            </View>
        );
    }
}
 
 const data2 = [["2012-1","2.12"],["2012-2","3.2"],["2012-3","3.12"],["2012-4","2.92"],["2012-5","2.05"],["2012-6","4.78"]]



const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: height * 0.35,
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    chart: {
      flex: 1,
      width: width -20
    },
});
export default GraphScore;
