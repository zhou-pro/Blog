import React from 'react';
import { Redirect } from "react-router-dom";

import ZYBlog from '../pages/blog'

export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/blog"/>
    )
  },
  {
    path: "/blog",
    component: ZYBlog
  },
]