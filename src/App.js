import "./App.css";
import { Landing } from "./Page/Landing";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Landing />
    </RecoilRoot>
  );
}

export default App;
