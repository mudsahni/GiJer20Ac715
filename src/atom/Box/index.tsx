import * as React from 'react'

import './style.css'
interface BoxProps {
    scaleTransform: boolean;
}

export const Box: React.FC<BoxProps> = ({ scaleTransform, children }) => {
    return (
        <div className={`box ${scaleTransform && "scale-transform-box"}`}>
            {children}
        </div>
    );
}