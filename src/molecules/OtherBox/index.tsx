import * as React from 'react'
import { Label } from 'semantic-ui-react'
import './style.css'

interface OtherBoxProps {
    data: { title: string, skills: { title: string, subtitle: string, link: string }[] };
}

export const OtherBox: React.FC<OtherBoxProps> = ({ data }) => {
    return (
        <div className="skills-box-container">
            <div className="skills-box-title">
                {data.title}
            </div>
            <div className="skills-box">
                {data.skills.map((skill, index) => {
                    
                        if (skill.link === "no-link") {
                            return (
                                <div className="skill" key={index}>
                                    <Label><div className="label-content"><span>{skill.title}</span><span>{skill.subtitle}</span></div></Label>
                                </div>
                            )
                        } else {
                            return (
                                <div className="skill" key={index}>
                                    <Label><div className="label-content"><a href={skill.link} target="_blank">{skill.title}</a><span>{skill.subtitle}</span></div></Label>
                                </div>
                            )
                        }
                    
                })}
            </div>
        </div>
    );
}