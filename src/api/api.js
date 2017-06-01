
const students = [

  {
    MSSV: '20081450',
    ten: 'Nguyễn Trung Kiên',
    lop: 'CNPM-K53',
    ngaysinh: '17/12/1989',
    sdt: '0969.995.997',
    email: 'nguyenphuctrungkien@gmail.com',
    canhcao: 0,
    trinhdo: 'Năm 4',
    tichLuy: '174',
    tcNo: '4',
    tcDaoTao: '176',
    familyInfo:
    {
      tenCha: 'Nguyễn Quang Trưởng',
      namsinhbo: '1960',
      tenMe: 'Đặng Thị Tốt',
      namsinhme: '1963',
      queQuan: 'Hải Dương',
      ngheNghiep: 'Công Nhân',
      sdt: '091.3588.129'
    },
    phoneNumber:
    [
      {
        type: 'home',
        number: '212 555-1234'
      },
      {
        type: 'fax',
        number: '646 555-4567'
      }
    ]
  },


];
export default () => new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve(students);
  }, 3000);
});
