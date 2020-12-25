import * as React from 'react'
import { Icon } from 'semantic-ui-react';
import './style.css'

interface LevelSquareProps {
    color?: "red" | "orange" | "yellow" | "olive" | "green" | "grey";
}

export const LevelSquare: React.FC<LevelSquareProps> = ({ color = 'grey' }) => {
    return (
        <div className="level-square"><Icon name="square" color={color}></Icon></div>
    );
}