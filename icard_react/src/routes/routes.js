import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import {Error404} from '../pages';
//import {Component} from 'react';
import {basiclayout} from '../layout'

const routes = [...routerAdmin, ...routerClient,{
                path:"*",
                layout: basiclayout,
                component: Error404,
        },
];

export default routes;
