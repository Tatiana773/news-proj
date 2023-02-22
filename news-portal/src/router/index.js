import React from 'react'
import loadable from '@loadable/component'

const HomePage = loadable(() => import('../pages/HomePage'))
const AboutPage = loadable(() => import('../pages/AboutPage'))
const NewsSetPage = loadable(() => import('../pages/NewsSetPage'))
const Error404Page = loadable(() => import('../pages/Errors/Error404Page'))

export const privateRoutes = [

]

export const publicRoutes = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/about',
        element:  <AboutPage/>
    },
    {
        path: '/newsset',
        element:  <NewsSetPage/>
    },
    {
        path: '*',
        element:  <Error404Page/>
    }
]
