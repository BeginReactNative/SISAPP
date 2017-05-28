import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import AnimatedLinearGradient, { presetColors } from 'react-native-animated-linear-gradient';
import { Header_Menu } from '../../../components/headers/Header_Menu';
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
							<Text style={styles.textStyle}>Họ và tên: Nguyễn Trung Kiên</Text>
							<Text style={styles.textStyle}>Ngày sinh: 17/12/1989</Text>
							<Text style={styles.textStyle}>MSSV: 20081450</Text>
							<Text style={styles.textStyle}>Lớp: CNPM-K53</Text>
							<Text style={styles.textStyle}>Mức cảnh cáo: 0</Text>
							<Text style={styles.textStyle}>Trình độ: Năm 4</Text>
							<Text style={styles.textStyle}>SDT: 0969995997</Text>
							<Text style={styles.textStyle}>email: nguyentrungkien@gmail.com</Text>
						</View>
					</View>
					<View style={styles.viewBetween} />
					<View style={styles.generalInfoStyle}>
						<View style={styles.headerInfo}>
							<Text style={styles.headerText}>THÔNG TIN GIA ĐÌNH</Text>
						</View>
						<View style={styles.InfoStyle}>
							<Text style={styles.textStyle}>Họ và tên bố: Nguyễn Quan Trưởng</Text>
							<Text style={styles.textStyle}>Ngày sinh: 17/12/1960</Text>
							<Text style={styles.textStyle}>Nghề Nghiệp : Công nhân</Text>
							<Text style={styles.textStyle}>Họ và tên mẹ: Đặng Thị Tốt</Text>
							<Text style={styles.textStyle}>Ngày sinh: 17/12/1960</Text>
							<Text style={styles.textStyle}>Nghề nghiệp: Buôn bán</Text>
							<Text style={styles.textStyle}>Địa chỉ: Ngọc Châu-TP.Hải Dương</Text>
						</View>
					</View>


				</View>
			</ScrollView>


		);
	}
}

export default Profile;

/**
 *  <Profile_View goto={() => { this.props.navigation.navigate('Change_Info') }} />
 */
