import * as React from 'react'
import './style.css'

interface GrowthBarProps {
    roles: { position: String, title: String, team: String, dates: JSX.Element, current: boolean }[]
}


export const GrowthBar: React.FC<GrowthBarProps> = ({ roles }) => {
    const leftPosition = {
        justifyContent: "flex-end"
    }

    const rightPosition = {
        justifyContent: "flex-start"
    }

    return (
        <div className="growth-bar">
            {roles.map((role, index) => {
                return (<div className="role" key={index}>
                    <div className="position-text">
                        <span>{role.title}</span>
                        <span>{role.team}</span>
                        <span>{role.dates}</span>

                    </div>
                    {role.position === "start" ? (
                        <div className="position-left">
                            <div className="position-icon"></div>
                            <div className="journey"></div>

                        </div>
                    ) : role.position == "end" ? (
                        <div className="position-right">
                            <div className="journey"></div>

                            <div className="position-icon"></div>

                        </div>
                    ) : (
                                <div className="position">
                                    <div className="journey"></div>
                                    <div className="position-icon"></div>
                                    <div className="journey"></div>

                                </div>
                            )
                    }
                </div>)
            })}
        </div>


    );
}


<div className="growth-bar">
    <div className="role">
        <div className="position-text">

            <span>Associate Software Development Engineer,</span>
            <span>Behaviour Experimentation</span>
            <span>Oct 2017&ndash;Mar 2019</span>

        </div>
        <div className="position-left">
            <div className="position-icon"></div>
            <div className="journey"></div>

        </div>
    </div>
    <div className="role">
        <div className="position-text">
            <span>Software Development Engineer I,</span>
            <span>Behaviour Experimentation</span>
            <span>March 2019&ndash;</span>
        </div>
        <div className="position-right">
            <div className="journey"></div>

            <div className="position-icon"></div>

        </div>
    </div>

</div>
