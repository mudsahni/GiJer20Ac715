import * as React from 'react'
import { Icon } from 'semantic-ui-react';
import './style.css'

interface RoleBoxProps {
    content: { role: String, date: String, team: String, key: string, active: boolean };
}

export const RoleBox: React.FC<RoleBoxProps> = ({ content }) => {
    return (
        <div className={`role-box ${content.active == true ? "active-role-box" : ""}`} key={content.key}>
            <div>
                <span>{content.role}</span>
                <span>{content.team}</span>
                <span><em>{content.date}</em></span>
            </div>

        </div>
    );
}