import * as React from 'react'
import { LevelSquare } from '../../atom/LevelSquare';
import './style.css'

interface LevelSquaresProps {
    rating: number;
}

export const LevelSquares: React.FC<LevelSquaresProps> = ({ rating }) => {
    const colors: any = ["red", "orange", "yellow", "olive", "green"]
    return (
        <div className="level-squares">
            {
                colors.map((_: any, index: number) => {
                    return (index < rating ? <LevelSquare color={colors[index]} key={index}></LevelSquare> : <LevelSquare color='grey' key={index}></LevelSquare>)
                })
            }

        </div>
    );
}