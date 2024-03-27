// src\app\[...item]\page.tsx
'use client'
import React, { useEffect } from 'react';
import useIsActiveLinkStore from './stores/isActiveLinkStore';
import { ROUTE_PATH, isParentRoute, routes } from '../routes';

interface ItemPageProps {
    params: {
        item: string[];
    };
}

const ItemPage: React.FC<ItemPageProps> = ({ params: { item } }) => {
    const setIsActiveLink = useIsActiveLinkStore((state) => state.setIsActiveLink);
    // const path = ['', ...item].join('/');
    const path = ['', ...item].join('/') as ROUTE_PATH
    console.log("path : ", path)
    const route = routes[path]

    if (!route || isParentRoute(route)) return null
    const { children: Component } = route

    useEffect(() => {
        setIsActiveLink(path);
    }, [path, setIsActiveLink]);

    // return <div>Item page : {path}</div>
    return Component ? <Component /> : null

};

export default ItemPage;
