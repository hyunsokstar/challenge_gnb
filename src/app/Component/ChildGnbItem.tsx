// components/ChildGnbItem.tsx
import React from 'react';
import Link from 'next/link';
import { ChildRoute } from '../routes';
import useIsActiveLinkStore from '../[...item]/stores/isActiveLinkStore';

const ChildGnbItem: React.FC<ChildRoute> = ({ name, link }) => {
    const isActiveLink = useIsActiveLinkStore((state) => state.isActiveLink);

    const liClickHandler = () => {
        // console.log("li click : ", link);
    };

    return (
        <li onClick={liClickHandler} style={{ color: isActiveLink === link ? 'red' : 'skyblue' }}>
            <Link href={link}>{name}</Link>
        </li>
    );
};

export default ChildGnbItem;
