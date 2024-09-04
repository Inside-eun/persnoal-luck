import axios from "axios";
const url =
  "http://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getSolCalInfo?lunYear=2015&lunMonth=01&lunDay=01&ServiceKey=I5Ehb1LBegC6vD7b80waEqqgALvnUI9hv33TrPfz9iI0DCm2HVCt3zwbpw44BCHvJrYRICU7tBjatXrQWrtCng%3D%3D";

const GetGanji = () => {
  axios({
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },

    withCredentials: true,
    url: url,
    data: {
      solYear: 1997,
      solMonth: 8,
      solDay: 18,
    },
  }).then((res) => console.log(res));
};

export default GetGanji;

// const heavenlyStems = [
//   "갑",
//   "을",
//   "병",
//   "정",
//   "무",
//   "기",
//   "경",
//   "신",
//   "임",
//   "계",
// ];
// const earthlyBranches = [
//   "자",
//   "축",
//   "인",
//   "묘",
//   "진",
//   "사",
//   "오",
//   "미",
//   "신",
//   "유",
//   "술",
//   "해",
// ];
