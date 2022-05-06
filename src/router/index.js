import React from 'react';
import { Redirect } from "react-router-dom";

// import HYDiscover from "../pages/discover";
// import HYRecommend from "../pages/discover/c-pages/recommend";
// import HYRanking from "../pages/discover/c-pages/ranking";
// import HYSongs from "../pages/discover/c-pages/songs";
// import HYDjradio from "../pages/discover/c-pages/djradio";
// import HYArtist from "../pages/discover/c-pages/artist";
// import HYAlbum from "../pages/discover/c-pages/album";
// import HYPlayer from "../pages/player";

// import HYFriend from "../pages/friend";
// import HYMine from "../pages/mine";

const HYDiscover = React.lazy(_ => import("../pages/discover"));
const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const HYPlayer = React.lazy(_ => import("../pages/player"));
 

const HYFriend = React.lazy(_ => import("../pages/friend"));
const HYMine = React.lazy(_ => import("../pages/mine"));

const Blog =  React.lazy(_ => import("../pages/blog"));
const ZYblogHome = React.lazy(_ => import("../pages/blog/home"));
// const ZYMusic = React.lazy(_ => import("../pages/blog/music"));

const ZYMomentDetail = React.lazy(_ => import("../pages/blog/home/momentDetail"))

const ZYBlogLogin = React.lazy(_ => import("../pages/blog/login"))

const ZYBadmin = React.lazy(_ => import("../pages/blog/badmin"))
const ZYAddMoment = React.lazy(_ => import("../pages/blog/badmin/components/addMoment"))
const ZYProfil = React.lazy(_ => import("../pages/blog/badmin/components/profil"))
const ZYEditMoment = React.lazy(_ => import("../pages/blog/badmin/components/editMoment"))
const ZYRole = React.lazy(_ => import("../pages/blog/badmin/components/role"))
const ZYNumber = React.lazy(_ => import("../pages/blog/badmin/components/number"))
export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to={"/Blog"}/>
    )
  },
  {
    path:'/Blog/login',
    component:ZYBlogLogin
  },
  
  {
    path:"/badmin",
    component:ZYBadmin,
    routes: [
      {
        path:'/badmin',
        exact: true,
        render: () => (
          <Redirect to={"/badmin/number"}/>
        )
      },
      {
        path:"/badmin/addMoment",
        component:ZYAddMoment
      },
      {
        path:"/badmin/profil",
        component:ZYProfil
      },
      {
        path:'/badmin/moment',
        component:ZYEditMoment
      },
      {
        path:'/badmin/roles',
        component:ZYRole
      },
      {
        path:'/badmin/number',
        component:ZYNumber
      }
    ]
  },
  {
    path:"/Blog",
    component:Blog,
    routes:[
      {
        path: "/Blog",
        exact: true,
        render: () => (
          <Redirect to={"/Blog/home"}/>
        )
      },
      {
        path:'/Blog/moment/:id',
        component:ZYMomentDetail
      },
      {
        path: "/Blog/home",
        component: ZYblogHome
      },
      // {
      //   path: "/Blog/music",
      //   component: ZYMusic
      // },
      
    ]
  },
  
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },
  {
    path: "/friend",
    component: HYFriend
  },
  {
    path: "/mine",
    component: HYMine
  }
]