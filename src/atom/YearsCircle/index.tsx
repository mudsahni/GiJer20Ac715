import * as React from 'react'
import './style.css'

interface YearsCircleProps {
    number: number;
}

export const YearsCircle: React.FC<YearsCircleProps> = ({ number }) => {
    return (
        <div className="years-circle">
            <span>{number}</span><span>{number == 1 ? "Yr" : "Yrs"}</span>
        </div>
    );
}