import React, { memo, Suspense } from 'react'

import ZYNavBar from './c-page/navbar'

import { BlogHomeWrapper, BlogHeaderWrapper, BlogBannerWraper, BlogMainWrapper } from './style'

import { renderRoutes } from "react-router-config";

import routes from "@/router"

import Loading from '@/components/loading'

export default memo(function ZYBlog(props) {
  return (
    <BlogHomeWrapper>
      <BlogHeaderWrapper >
     <ZYNavBar/>
      </BlogHeaderWrapper>
     <BlogMainWrapper>
     <Suspense fallback={<Loading/>}>
        {renderRoutes(props.route.routes)}
      </Suspense>
      </BlogMainWrapper>
      
    </BlogHomeWrapper>
  )
})
