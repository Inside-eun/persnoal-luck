import React, { useEffect, useState, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import userGanji from '../State/UserGanji';
import { ResponsivePie } from '@nivo/pie';
import * as style from '../style/ViewReport.style';
import userInfo from '../State/UserInfo';
import RecommandItems from './RecommandItems';

const GanjiCircleGraph = () => {
  const [ganji, setGanji] = useRecoilState(userGanji);
  const [info, setInfo] = useRecoilState(userInfo);
  const [pointReady, setPointReady] = useState(false);
  const [graphData, setGraphData] = useState([]);
  const [points, setPoints] = useState({
    火: 0,
    水: 0,
    土: 0,
    金: 0,
    木: 0,
  });
  const [pointStore, setPointStore] = useState(['火', '火']);
  const [color, setColor] = useState(['불', '빨간']);

  const colorMapping = {
    火: '#FF2B2B',
    水: '#1E1E1E',
    土: '#FFBB00',
    金: '#F5F5F5',
    木: '#587AFF',
  };

  const PropsColor = {
    火: ['불', '빨간', 'red'],
    水: ['물', '검은', 'black'],
    土: ['흙', '노란', 'yellow'],
    金: ['금', '하얀', 'white'],
    木: ['나무', '파란', 'blue'],
  };

  useEffect(() => {
    setPointReady(false);
    if (ganji.year && ganji.time && ganji.year.length > 1 && ganji.time.length > 1) {
      const fireSource = ['丙', '丁', '午', '巳'];
      const waterSource = ['壬', '癸', '亥', '子'];
      const earthSource = ['戊', '己', '辰', '未', '戌', '丑'];
      const metalSource = ['庚', '辛', '酉', '申'];
      const woodSource = ['甲', '乙', '寅', '卯'];

      const updatedPoints = { 火: 0, 水: 0, 土: 0, 金: 0, 木: 0 };

      const updatePoints = (element) => {
        if (fireSource.includes(element)) updatedPoints.火 += 1;
        if (waterSource.includes(element)) updatedPoints.水 += 1;
        if (earthSource.includes(element)) updatedPoints.土 += 1;
        if (metalSource.includes(element)) updatedPoints.金 += 1;
        if (woodSource.includes(element)) updatedPoints.木 += 1;
        const maxKey = Object.keys(updatedPoints).reduce((a, b) => (updatedPoints[a] >= updatedPoints[b] ? a : b));

        const minKey = Object.keys(updatedPoints).reduce((a, b) => (updatedPoints[a] < updatedPoints[b] ? a : b));

        setColor(PropsColor[minKey]);

        setPointStore([maxKey, minKey]);
      };

      Object.values(ganji).forEach((elements) => {
        elements.forEach(updatePoints);
      });

      setPoints(updatedPoints);
      console.log('updatedPoints :', updatedPoints);
    }
  }, [ganji]);

  useEffect(() => {
    if (!Object.values(points).every((value) => value !== 0)) {
      console.log('no zero');

      const transformedData = Object.entries(points)
        .map(([id, value]) => ({
          id,
          value,
        }))
        .filter((item) => item.value !== 0);
      setGraphData(transformedData);
      setPointReady(true);
    }
  }, [points]);

  return (
    <>
      <style.DivideLine />
      <style.LargeGraphHeader>나의 오행 점수</style.LargeGraphHeader>
      {pointReady ? (
        <div style={{ width: '100%', height: '320px' }}>
          <ResponsivePie
            data={graphData}
            margin={{ top: 25, right: 10, bottom: 40, left: 10 }}
            innerRadius={0.38}
            padAngle={1}
            borderColor="#ffffff"
            enableArcLinkLabels={false}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsTextColor={(e) => (e.id === '金' ? '#000' : '#FFF')}
            arcLabel={(e) => (
              <>
                <tspan
                  x="0"
                  dy="-0.5em"
                  style={{
                    fontSize: '20px',
                    fontWeight: 'normal',
                  }}
                >
                  {e.id}
                </tspan>
                <tspan
                  x="0"
                  dy="1.6em"
                  style={{
                    fontSize: '12px',
                    fontWeight: 'normal',
                    lineHeight: '1.2',
                  }}
                >
                  {e.value}점
                </tspan>
              </>
            )}
            legends={[]}
            colors={(datum) => colorMapping[datum.id] || '#CCCCCC'}
          />
          <div
            style={{
              position: 'absolute',
              top: '94%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none',
              color: '#333',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '32px', lineHeight: '1.2' }}>{pointStore[0]}</h3>
          </div>
        </div>
      ) : (
        <div>loding...</div>
      )}
      <style.PointScript>
        사주에 '{pointStore[0]}'이 가장 많고
        <br />'{pointStore[1]}'이 가장 부족하시네요
        <br />
        {info.name}님께 부족한 {color[1]} 물건들을 보여드릴게요
      </style.PointScript>
      <style.DivideLine />
      <RecommandItems color={color} />
    </>
  );
};

export default GanjiCircleGraph;
