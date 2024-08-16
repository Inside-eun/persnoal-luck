import { atom } from "recoil";

const userGanji = atom({
  key: "userGanji",
  default: {
    year: "",
    month: "",
    day: "",
    time: "",
  },
});

export default userGanji;
