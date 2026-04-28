import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes } from 'zmp-ui';

// Import các trang của bạn vào đây:
import HomePage from '../pages/index';
import Quiz1Page from '../pages/quiz1'; 
import Quiz2Page from '../pages/quiz2';
import Quiz2_1Page from '../pages/quiz2_1';
import Quiz2_2Page from '../pages/quiz2_2';
import Quiz2_3Page from '../pages/quiz2_3';
import ThanksPage from '../pages/thanks';

const Layout = () => {
  return (
    <App>
      <ZMPRouter>
        <AnimationRoutes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz1" element={<Quiz1Page />} />
          <Route path="/quiz2" element={<Quiz2Page />} />
          <Route path="/quiz2_1" element={<Quiz2_1Page />} />
          <Route path="/quiz2_2" element={<Quiz2_2Page />} />
          <Route path="/quiz2_3" element={<Quiz2_3Page />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </AnimationRoutes>
      </ZMPRouter>
    </App>
  );
};

export default Layout;