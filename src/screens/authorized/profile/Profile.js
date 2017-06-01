import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import { connect } from 'react-redux';
import { Header_Menu } from '../../../components/headers/Header_Menu';
import { fetchData } from '../../../actions';
import styles from './ProfileStyle';


class Profile extends Component {
	static navigationOptions = ({ navigation }) => ({
		//tabBarIcon: ({ focused }) => (focused ? HomeIcon : HomeIconWhite),
		headerLeft: <Header_Menu {...navigation} />,
		title: <Text style={{ color: 'black' }}>Thông tin sinh viên</Text>,
		headerStyle: {
			backgroundColor: 'rgb(106, 57, 171)'
		}
	})


	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<View style={styles.container}>
					<AnimatedLinearGradient customColors={presetColors.instagram} speed={4000} />
					<TouchableOpacity onPress={this.props.fetchData}>
						<Text>Click Me</Text>
					</TouchableOpacity>
					<Image
						source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18119203_10207029383893032_9159228082315095214_n.jpg?oh=bb4b1f5f2c9f6a77058ad0dc245e85d8&oe=59B88EB2' }}
						style={styles.avatarStyle}
					/>
					<View style={styles.viewBetween} />

					<View style={styles.generalInfoStyle}>
						<View style={styles.headerInfo}>
							<Text style={styles.headerText}>THÔNG TIN CƠ BẢN</Text>
						</View>
						<View style={styles.InfoStyle}>
							{
								this.props.data.isFetching && <Text>Loading</Text>
							}
							{
								this.props.data.data.length ? (
									this.props.data.data.map((person, i) => {
										return <View key={i}>
											<Text style={styles.textStyle}>Tên: {person.ten}</Text>
											<Text style={styles.textStyle}>MSSV: {person.MSSV} </Text>
											<Text style={styles.textStyle}>Ngày sinh: {person.ngaysinh} </Text>
											<Text style={styles.textStyle}>Lớp: {person.lop} </Text>
											<Text style={styles.textStyle}>Mức cảnh cáo: {person.canhcao} </Text>
											<Text style={styles.textStyle}>Trình độ: {person.trinhdo} </Text>
											<Text style={styles.textStyle}>Số ĐT: {person.sdt} </Text>
											<Text style={styles.textStyle}>Email: {person.email} </Text>


												</View>
									})
								) : null
							}


						</View>
					</View>
					<View style={styles.viewBetween} />
					<View style={styles.generalInfoStyle}>
						<View style={styles.headerInfo}>
							<Text style={styles.headerText}>THÔNG TIN GIA ĐÌNH</Text>
						</View>
						<View style={styles.InfoStyle}>
							{
								this.props.data.isFetching && <Text>Loading</Text>
							}
							{
								this.props.data.data.length ? (
									this.props.data.data.map((person, i) => {
										return <View key={i}>
											<Text style={styles.textStyle}>Tên Bố: {person.familyInfo.tenCha}</Text>
											<Text style={styles.textStyle}>Nghề nghiệp: {person.familyInfo.ngheNghiep} </Text>
											<Text style={styles.textStyle}>Năm sinh: {person.familyInfo.namsinhbo} </Text>
											<Text style={styles.textStyle}>Tên Mẹ: {person.familyInfo.tenMe} </Text>
											<Text style={styles.textStyle}>Nghề Nghiệp: {person.familyInfo.ngheNghiep} </Text>
											<Text style={styles.textStyle}>Năm Sinh: {person.familyInfo.namsinhme} </Text>
											<Text style={styles.textStyle}>Quê Quán: {person.familyInfo.queQuan} </Text>
											<Text style={styles.textStyle}>Liên hệ: {person.familyInfo.sdt} </Text>


												</View>
									})
								) : null
							}


						</View>
					</View>


				</View>
			</ScrollView>


		);
	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
		data: state.fetchReducer
	};
};
export default connect(mapStateToProps, { fetchData })(Profile);

/**
 *  <Profile_View goto={() => { this.props.navigation.navigate('Change_Info') }} />
 */
