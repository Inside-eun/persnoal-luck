import { atom } from "recoil";

const userInfo = atom({
  key: "userInfo",
  default: {
    gen: "",
    cal: "",
    year: 0,
    month: 0,
    day: 0,
    time: "",
  },
});

export default userInfo;
