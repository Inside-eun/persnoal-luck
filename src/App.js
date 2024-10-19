import { Landing } from "./Page/Landing";
import { ViewReport } from "./Page/ViewReport";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BackGround } from "./style/basic.style";
import { LandingHeader } from "./Component/Header";
import GlobalFont from "./style/font";
import GlobalStyle from "./style/globalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/result",
    element: <ViewReport />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <BackGround>
        <GlobalStyle />
        <GlobalFont />
        <LandingHeader />
        <RouterProvider router={router} />
      </BackGround>
    </RecoilRoot>
  );
}

export default App;
