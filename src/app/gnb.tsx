// src\app\gnb.tsx
'use client';
import React from 'react'
import { gnbRootList } from './routes'
import { GnbItem } from './Component/GnbItem';

type Props = {}


const Gnb = (props: Props) => {
    // console.log("gnbRootList : ", gnbRootList);
    return (
        <aside>
            <h1>
                GNB <sub>FE HyunSeok</sub>
            </h1>

            <ul>
                {gnbRootList.map((row) => (
                    <GnbItem {...row} key={row.key} />
                ))}
            </ul>

        </aside>
    )
}


export default Gnb