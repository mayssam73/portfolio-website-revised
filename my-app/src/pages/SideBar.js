import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function side_bar() {
    return (
        <div className="sticky">
            <div className="-rotate-180 ml-4" style={{writingMode: 'vertical-lr'}}>MAYSSAM KALAJO</div>
            <div className="flex flex-row">
                {/* Fix the responsiveness of icons */}
                <Link href="https://github.com/mayssam73">
                    <FontAwesomeIcon icon={["fab", "github"]} rotation={270} size="2xl" className="ml-4 mt-[57vh]"/>
                </Link>
                <Link href="https://www.linkedin.com/in/mayssam-kalajo/">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} rotation={270} size="2xl" className="-ml-7 mt-[63vh]"/>
                </Link>
            </div>
        </div>
    );
} 