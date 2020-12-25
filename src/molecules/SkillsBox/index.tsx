import * as React from 'react'
import { Label } from 'semantic-ui-react'
import { YearsCircle } from '../../atom/YearsCircle'
import './style.css'

interface SkillsBoxProps {
    data: { title: String, skills: String[] };
}

export const SkillsBox: React.FC<SkillsBoxProps> = ({ data }) => {
    return (
        <div className="skills-box-container">
            <div className="skills-box-title">
                {data.title}
            </div>
            <div className="skills-box">
                {data.skills.map((skill, index) => {
                    return (
                        <div className="skill" key={index}>
                            <Label content={skill}></Label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}