import { atom } from "recoil";

const userInfo = atom({
  key: "userInfo",
  default: {
    gender: "",
    calendarType: "",
    year: 0,
    month: 0,
    day: 0,
    timetable: "",
  },
});

export default userInfo;
