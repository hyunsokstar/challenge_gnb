"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ParentRoute, routes } from '../routes';
import { GnbItem } from './GnbItem';

const ParentGnbItem = ({ name, link, children }: ParentRoute) => {
    const [isOpen, setIsOpen] = useState(false); // 하위 메뉴의 열림 상태를 관리하는 state

    const toggleSubMenu = () => {
        setIsOpen(!isOpen); // 하위 메뉴의 열림 상태를 토글합니다.
    };

    // ParentGnbItem 컴포넌트
    return (
        <li className="parent-item">
            <div onClick={toggleSubMenu} className="parent-link">
                {/* isOpen 상태에 따라 다른 아이콘을 표시합니다. */}
                <Link href={link}>{name}</Link>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                        <path fill="#FFA500" d="M21.59 10.59l-1.41-1.41L12 16.17 3.41 9.41 2 10.82l10 10 10-10z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24">
                        <path fill="#FFA500" d="M21.59 10.59l-1.41-1.41L12 16.17 3.41 9.41 2 10.82l10 10 10-10z" transform="rotate(-90 12 12)" />
                    </svg>
                )}
            </div>
            {isOpen && (
                <ul className="sub-menu">
                    {children.map((r) => {
                        const route = routes[r];
                        return <GnbItem {...route} key={route.key} />;
                    })}
                </ul>
            )}
        </li>
    );

}

export default ParentGnbItem;
