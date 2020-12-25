import * as React from 'react'
import faker from 'faker'
import _ from 'lodash'

import { Accordion, Container, Divider, Header, Icon } from 'semantic-ui-react';
import './style.css'

interface CVMainBoxProps {
    title: string;
}


export const CVMainBox: React.FC<CVMainBoxProps> = ({ title, children }) => {

    return (
        <div className="professional-box">
            <div className="box-title">
                <div className="skills-box-title">{title}</div>
            </div>
            {children}
        </div>

    )
}
// export const ProfessionalBox: React.FC<ProfessionalBoxProps> = ({ }) => {
//     const [activeIndex, setActiveIndex] = React.useState<number>(-1)
//     const handleClick = (e: React.SyntheticEvent, titleProps: any) => {
//         const { index } = titleProps
//         const _activeIndex = activeIndex
//         const newIndex = _activeIndex === index ? -1 : index

//         setActiveIndex(newIndex)
//     }
//     const iconType: any = activeIndex === 0 ? "chevron up" : "chevron down"
//     return (
//         <div className="professional-box">
//             <div className="box-title">
//                 <Header as="h3">Professional Experience</Header>
//             </div>
//             <Divider />

//             <Accordion>
//                 <Accordion.Title
//                     active={activeIndex === 0}
//                     index={0}
//                     onClick={handleClick}
//                 >
//                     <div className="accordion-title">
//                         <Header as="h4">Expedia</Header><Icon name={iconType} size="small"></Icon>
//                     </div>
//                 </Accordion.Title>
//                 <Accordion.Content active={activeIndex === 0}>
//                     <div className="accordion-content">
//                         <div className="accordion-content-heading">
//                             <span>Software Development Engineer I</span>
//                             <span>March 2019&mdash;</span>
//                         </div>
//                         Behaviour Experimentation Platform
//                         <Divider />
//                         <div className="accordion-content-content">
//                         </div>

//                         <div className="accordion-content-heading">
//                             <span>Associate Software Development Engineer</span>
//                             <span>October 2017&mdash;March 2019</span>
//                         </div>
//                                                 Behaviour Experimentation Platform

//                         <Divider />

//                     </div>
//                 </Accordion.Content>
//                 <Accordion.Title
//                     active={activeIndex === 1}
//                     index={1}
//                     onClick={handleClick}
//                 >
//                     <div className="accordion-title">
//                         <Header as="h4">Gartner</Header><Icon name={iconType} size="small"></Icon>
//                     </div>
//                 </Accordion.Title>
//                 <Accordion.Content active={activeIndex === 1}>
//                     <div className="accordion-content">
//                         <div className="accordion-content-heading">
//                             <span>Quantitative Specialist</span>
//                             <span>March 2017&mdash;October 2017</span>
//                         </div>
//                                                 Quantitative Research and Analysis

//                         <Divider />
//                         <div className="accordion-content-heading">
//                             <span>Digital Products Specialist</span>
//                             <span>October 2016&mdash;March 2017</span>
//                         </div>
//                                                 Digital Products

//                         <Divider />
//                         <div className="accordion-content-heading">
//                             <span>Digital Products Associate</span>
//                             <span>October 2014&mdash;March 2016</span>
//                         </div>
//                                                 Digital Products

//                         <Divider />
//                         <div className="accordion-content-heading">
//                             <span>Digital Products Intern</span>
//                             <span>December 2013&mdash;March 2014</span>
//                         </div>
//                                                 Digital Products

//                         <Divider />

//                     </div>
//                 </Accordion.Content>

//             </Accordion>
//         </div>

//     );
// }