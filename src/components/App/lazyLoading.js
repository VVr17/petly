import React from 'react';

export const Home = React.lazy(() => import('pages/Home'));
export const Register = React.lazy(() => import('pages/Register'));
export const Login = React.lazy(() => import('pages/Login'));
export const Friends = React.lazy(() => import('pages/FriendsPage'));
export const News = React.lazy(() => import('pages/News'));
export const Notices = React.lazy(() => import('pages/Notices'));
export const SharedLayout = React.lazy(() => import('components/SharedLayout'));
export const User = React.lazy(() => import('pages/User'));
export const NotFound = React.lazy(() => import('pages/NotFound'));
