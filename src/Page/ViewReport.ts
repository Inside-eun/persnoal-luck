import React from 'react';
import GanjiCircleGraph from '../Component/GanjiCircleGraph';
import GanjiResult from '../Component/GanjiResult';
import { InsertInfo } from '../Component/InsertInfo';
import GoMain from '../Component/GoMain';

export const ViewReport = () => {
  return (
    <div>
      <InsertInfo />
      <GanjiResult />
      <GanjiCircleGraph />
      <GoMain />
    </div>
  );
};
