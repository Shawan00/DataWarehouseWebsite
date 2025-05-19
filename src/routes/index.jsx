import React from 'react';
import Sale from "@/pages/Sale";
import Inventory from "@/pages/Inventory";
import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";

export const routes = [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Sale/>
      },
      {
        path: 'inventory',
        element: <Inventory/>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]
