# SISAPP
React Native Step by Step!
Em gửi thầy source code app . Đại khái e đã làm lại app theo cách mới . 

Project quản lý theo các màn hình lớn trong folder project .
folder navigations quản lý mối quan hệ giữa các màn hình .
folder components quản lý các component hiển thị từng chi tiết trong mỗi màn hình .
các file XXXStyle. để viết style cho từng component
folder img chứa các icon cho app
folder demo_data là các file chứa dữ liệu ảo . fake file json nhận được từ api.


 Riêng các folder actions , reducers , store là các phần quản lý của thư viện redux để quản lý và bắt các thao tác từ người dùng.
 Phần này e đang lỗi . nhưng tạm thời ở ver 1.0 thì cũng chưa cần thiết lắm . E sẽ tìm hiểu tiếp và fix lại sau .

Sử dụng : start terminal
git clone https://github.com/BeginReactNative/SISAPP.git
npm install
react-native run-ios

Nếu có lỗi xảy ra, click Simulator IOS ,=> reset Content and Setting
Quit Simulator và terminal đang chạy project
bật lại terminal
sử dụng các lệnh:
watchman watch-del-all
rm -rf ./node_modules
npm cache clean
rm -rf $TMPDIR/react-*
npm install
npm cache clean
npm install uuid

nếu có sử dụng yarn thay thế npm
watchman watch-del-all
rm -rf ./node_modules
npm cache clean
yarn cache clean
rm -rf $TMPDIR/react-*
yarn install
npm cache clean
yarn cache clean
yarn add uuid

mở lại project bằng Xcode , click command+ B to rebuild project . Thoát terminal
bật lại và react-native run-ios

Vì react-native đang trong giai đoạn phát triển nên 1 số lỗi khá mất time để fix. Thầy thông cảm!

 cám ơn thầy đã đọc . 


