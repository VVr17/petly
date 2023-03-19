import React from 'react';

export const Home = React.lazy(() => import('pages/Home'));
export const Register = React.lazy(() => import('pages/Register'));
export const Login = React.lazy(() => import('pages/Login'));
export const Friends = React.lazy(() => import('pages/FriendsPage'));
export const News = React.lazy(() => import('pages/NewsPage'));
export const Notices = React.lazy(() => import('pages/NoticesPage'));
export const SharedLayout = React.lazy(() => import('components/SharedLayout'));
export const User = React.lazy(() => import('pages/UserPage'));
export const EmailVerified = React.lazy(() => import('pages/EmailVerified'));
export const NotFound = React.lazy(() => import('pages/NotFound'));
