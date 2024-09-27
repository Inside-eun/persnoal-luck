import styled from "styled-components";

export const BackGround = styled.div`
  width: 359px;
  height: 642px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  padding: 0;
  margin: 0;
  border: 3px solid gray;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  z-index: 10;
  background-color: white;
  top: 0;

  img {
    width: 121px;
    object-fit: contain;
  }
`;
