import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,Image } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import { Header_Home } from '../../../components/headers/Header_Home';
import Accordion from 'react-native-collapsible/Accordion';
import data from '../../../demo_data/DemoTableTime';
class Table_Time extends Component {
    static navigationOptions = {
        headerMode: 'screen',
        title: 'Home',
        headerTitleStyle: { color: '#fff' },
        header: (navigation) => <Header_Home {...navigation} />
    }
    _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.Ngay}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
          <View style={{ alignItems: 'center',justifyContent: 'space-between'}}>
              <Image source={require('../../../img/icon/clock.png')} style={styles.clock}/>
              <View style={{width:3,height: 60,backgroundColor:'#e0e0e0'}}/>
          </View>
        <View style={{marginLeft: 10,justifyContent: 'space-between'}}>
        <Text style={styles.textTime}>{section.ThoiGian}</Text>
        <Text style={styles.textDes}>{section.MaHP}</Text>
        <Text style={styles.textDes}>{section.TenMH}</Text>
        <Text style={styles.textDes}>{section.TuanHoc}</Text>
        <Text style={styles.textDes}>{section.DiaDiem}</Text>
        </View>
        
      </View>
    );
  }
    render() {
        return (
        <View style={{flex:1, padding:10}}>
           <AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />
         <Accordion
        sections={data}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
         />
         <View style={{ justifyContent:'center',alignItems: 'center', marginTop: 20 }}>
         <Text style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Avenir', color: 'red', backgroundColor: 'transparent' }}> KỲ HỌC: 2015-2</Text>
         </View>
         </View>
        );
    }
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'transparent',
    padding: 10,
    height: height / 7,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10

  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  clock: {
      width: 20,
      height: 20
  },
  textTime: {
      fontWeight: 'bold',
      fontSize: 15,
      fontFamily: 'Avenir'
  },
  textDes: {
      fontFamily: 'Avenir',
      fontSize: 12,
      color: '#696969'
  }

});
export default Table_Time;