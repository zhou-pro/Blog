import React, { memo, Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import HYAppPlayBar from '@/pages/player/app-play-bar';

import Loading from '@/components/loading'

export default memo(function HYMain() {
  return (
    <HashRouter>
      <HYAppHeader />
      <Suspense fallback={<Loading/>}>
        {renderRoutes(routes)}
      </Suspense>
      <HYAppFooter />
      <HYAppPlayBar/>
    </HashRouter>
  )
})
