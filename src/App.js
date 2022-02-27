import React, { Suspense } from 'react';

import { Provider } from "react-redux";
import store from "./store";

import { renderRoutes } from 'react-router-config';
import routes from '@/router'

import HYMain from './pages/main';
import BlogMain from '@/pages/blog'
import { HashRouter } from 'react-router-dom';
import Loading from '@/components/loading'

function App() {
  return (
    <Provider store={store}>
     <HashRouter>
     <Suspense fallback={<Loading/>}>
        {renderRoutes(routes)}
      </Suspense>
     </HashRouter>
      {/* <HYMain/> */}
      {/* <BlogMain/> */}
     
    </Provider>
  );
}

export default App;
