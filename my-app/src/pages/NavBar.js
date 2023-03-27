import React from 'react';

export default function nav_bar() {
    return (
        <div className="flex flex-row-reverse space-x-10 space-x-reverse mt-6 mr-9 sticky">
            <div>Contact</div>
            <div>Experience</div>
            <div>Projects</div>
            <div>About</div>
        </div>
    );
}