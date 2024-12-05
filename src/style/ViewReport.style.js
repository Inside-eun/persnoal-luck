import styled from 'styled-components';

export const InsertInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 74px;
  text-align: center;
`;

export const LargeTextHeader = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const SmallTextHeader = styled.div`
  font-size: 12px;
  color: #565656;
  line-height: 20px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
`;

export const LargeGraphHeader = styled.div`
  margin-top: 40px;
  font-size: 24px;
  text-align: center;
`;

export const PointScript = styled.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 40px;
  line-height: 21px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 40px 0;
  font-size: 14px;
  font-weight: 500;
  color: #6e6e6e;

  &:before,
  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e6e6e6;
    margin: 0 10px; /* 선과 텍스트 간격 */
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px; /* 카드 간격 */
  padding: 20px; /* 컨테이너 안쪽 여백 */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee; /* 카드 외곽선 */
  border-radius: 8px; /* 모서리 둥글게 */
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  background-color: #fff; /* 배경색 */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15); /* 호버 시 효과 */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 150px; /* 이미지 높이 고정 */
  object-fit: cover; /* 이미지 비율 유지하며 잘림 */
`;

export const CardText = styled.div`
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: center;
`;
