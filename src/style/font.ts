import { createGlobalStyle } from "styled-components";
import PretendardBlack from "../font/Pretendard-Black.woff";
import PretendardBold from "../font/Pretendard-Bold.woff";
import PretendardLight from "../font/Pretendard-Light.woff";
import PretendardMedium from "../font/Pretendard-Medium.woff";
import PretendardSemiBold from "../font/Pretendard-SemiBold.woff";

const GlobalFont = createGlobalStyle`
@font-face {
        font-family: 'Pretendard-Black';
        src: local('Pretendard-Black'), url(${PretendardBlack}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Bold';
        src: local('Pretendard-Bold'), url(${PretendardBold}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Light';
        src: local('Pretendard-Light'), url(${PretendardLight}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Medium';
        src: local('Pretendard-Medium'), url(${PretendardMedium}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: local('Pretendard-SemiBold'), url(${PretendardSemiBold}) format('woff');
        font-style: normal;
    }
`;

export default GlobalFont;
