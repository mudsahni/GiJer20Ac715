import * as React from 'react'
import { Image } from 'semantic-ui-react';
import './style.css'

interface NavItemProps {
    title: string;
    iconPath: string;
    active: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ title, iconPath, active }) => {
    return (
        <div className={`menu-title ${active && "menu-title-active"}`}>
            <Image src={`./${iconPath}`} size="mini" rounded></Image><span>{title}</span>
        </div>

    );
}