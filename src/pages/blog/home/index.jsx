import React, { memo, useEffect } from "react";

import { getAllMoments } from "./store/actionCreator";

import ZYBannerList from "./c-page/banners";
import ZYTopright from "./c-page/topright";
import ZYBottonContent from "./c-page/bottonContent";
import {
  BlogHomeWrapper,
  HomeTopWrapper,
  BannerListWrapper,
  BannerListRight,
  HomeButtonWrapper,
} from "./style";

import ReactLive2d from 'react-live2d';

import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default memo(function ZYBlogHome() {
  const dispatch = useDispatch();

  const { moments = [] } = useSelector(
    (state) => ({
      moments: state.getIn(["blogMoments", "moments"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    // getAllMoment({offset:0,size:100})
    dispatch(getAllMoments({ offset: 0, size: 100 }));
  }, [dispatch]);

  return (
    <BlogHomeWrapper>
      <HomeTopWrapper>
        <BannerListWrapper>
          <ZYBannerList></ZYBannerList>
        </BannerListWrapper>
        {/* <BannerListRight>
          <ZYTopright></ZYTopright>
        </BannerListRight> */}
      </HomeTopWrapper>
      <HomeButtonWrapper>
        
        <ZYBottonContent moments={ moments}/>
      </HomeButtonWrapper>
      <ReactLive2d
        width={300}
        height={500}
    />
    </BlogHomeWrapper>
  );
});
