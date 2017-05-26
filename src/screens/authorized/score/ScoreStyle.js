import { StyleSheet , Dimensions} from 'react-native';
const { height } = Dimensions.get('window');
module.exports = styles = StyleSheet.create({
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
      flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 10,
    height: height / 7,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    
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
  
    padding: 20,
    backgroundColor: '#fff',
    margin: 5
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
  },
  dropDownIcon: {
      width: 20,
      height: 20,
      marginRight: 10
  },
  containerDetail: {
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center'

  },
  SecTitle: {
    height: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  infotitle: {

  },

});