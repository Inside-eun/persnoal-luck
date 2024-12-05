import React, { useEffect, useState } from 'react';
import * as style from '../style/ViewReport.style';
import userInfo from '../State/UserInfo';
import { useRecoilState } from 'recoil';
import { colorItemImages } from '../data/colorItemsPic';

const RecommandItems = (color) => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [isFemale, setIsFemale] = useState(true);

  // https://shop.29cm.co.kr/category/list?
  // categoryLargeCode=268100100&
  // categoryMediumCode=&sort=RECOMMEND&defaultSort=RECOMMEND&sortOrder=DESC&page=1&brands=&categorySmallCode=&minPrice=0&maxPrice=&isFreeShipping=&excludeSoldOut=&isDiscount=&
  // colors=%23000000
  // &tag=&extraFacets=&attributes=%5B%5D

  const categoryList = {
    여성의류: '268100100',
    여성가방: '269100100',
    여성신발: '274100100',
    여성악세서리: '275100100',
    남성의류: '272100100',
    남성가방: '269100100',
    남성신발: '274100100',
    남성악세서리: '275100100',
    홈: '291100100',
    주방: '292100100',
    가전: '293100100',
    레저: '286100100',
  };

  const colorList = {
    블랙: '23000000',
    레드: '23d50c0c',
    옐로우: '23f3e219',
    그린: '2321ba21',
    화이트: '23ffffff',
  };

  const items = colorItemImages[color.color[2]] || [];

  useEffect(() => {
    if (info.gender !== '여성') {
      setIsFemale(false);
    } else {
      setIsFemale(true);
    }
  }, [info]);

  return (
    <>
      <style.LargeGraphHeader>내게 필요한 오행 아이템</style.LargeGraphHeader>
      <style.SectionTitle>Fashion</style.SectionTitle>
      {items.length > 0 && items[0].imageUrl ? (
        <>
          <style.GridContainer>
            {isFemale ? (
              <>
                <style.Card key={items[0].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[0].imageUrl} />
                  <style.CardText>의류</style.CardText>
                </style.Card>
                <style.Card key={items[1].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[1].imageUrl} />
                  <style.CardText>가방</style.CardText>
                </style.Card>
                <style.Card key={items[2].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[2].imageUrl} />
                  <style.CardText>신발</style.CardText>
                </style.Card>
                <style.Card key={items[3].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[3].imageUrl} />
                  <style.CardText>악세서리</style.CardText>
                </style.Card>
              </>
            ) : (
              <>
                <style.Card key={items[4].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[4].imageUrl} />
                  <style.CardText>의류</style.CardText>
                </style.Card>
                <style.Card key={items[5].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[5].imageUrl} />
                  <style.CardText>가방</style.CardText>
                </style.Card>
                <style.Card key={items[6].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[6].imageUrl} />
                  <style.CardText>신발</style.CardText>
                </style.Card>
                <style.Card key={items[7].id}>
                  <style.CardImage src={process.env.PUBLIC_URL + items[7].imageUrl} />
                  <style.CardText>악세서리</style.CardText>
                </style.Card>
              </>
            )}
          </style.GridContainer>
          <style.SectionTitle>Home</style.SectionTitle>
          <style.GridContainer>
            <style.Card key={items[8].id}>
              <style.CardImage src={process.env.PUBLIC_URL + items[8].imageUrl} />
              <style.CardText>홈</style.CardText>
            </style.Card>
            <style.Card key={items[9].id}>
              <style.CardImage src={process.env.PUBLIC_URL + items[9].imageUrl} />
              <style.CardText>주방</style.CardText>
            </style.Card>
            <style.Card key={items[10].id}>
              <style.CardImage src={process.env.PUBLIC_URL + items[10].imageUrl} />
              <style.CardText>가전</style.CardText>
            </style.Card>
          </style.GridContainer>
          <style.SectionTitle>ETC</style.SectionTitle>
          <style.GridContainer>
            <style.Card key={items[11].id}>
              <style.CardImage src={process.env.PUBLIC_URL + items[11].imageUrl} />
              <style.CardText>레저</style.CardText>
            </style.Card>
          </style.GridContainer>
        </>
      ) : (
        <>load</>
      )}
    </>
  );
};

export default RecommandItems;
