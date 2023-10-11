import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

export function RouteTransition({ children, ...rest }) {
  return <Route />;
  // return <Route {...rest}>{children}</Route>;
}

export function AnimatedRoutes({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        {children}
      </Routes>
    </AnimatePresence>
  );
}
