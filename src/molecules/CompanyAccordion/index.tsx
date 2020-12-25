import * as React from 'react'
import { Accordion, Divider, Header, Icon, Step } from 'semantic-ui-react';
import { GrowthBar } from '../GrowthBar';
import { RoleBox } from '../RoleBox';
import './style.css'

interface CompanyAccordionProps {
    data: { title: string, key: string, data: { positions: { role: string, team: string, key: string, date: string, active: boolean }[], content: JSX.Element }[] }
    // data: { title: string, key: string, positions: { role: string, team: string, date: string, key: string, content: JSX.Element }[] }
    // roleData: { position: String, title: String, team: String, dates: JSX.Element, current: boolean }[]
}

export const CompanyAccordion: React.FC<CompanyAccordionProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0)
    const handleClick = (e: React.SyntheticEvent, titleProps: any) => {
        const { index } = titleProps
        const _activeIndex = activeIndex
        const newIndex = _activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    const iconType: any = activeIndex === 0 ? "chevron up" : "chevron down"

    return (
        <Accordion>
            <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
            >
                <div className="accordion-title">
                    <Header as="h4"><span>{data.title}</span></Header><Icon name={iconType} size="small"></Icon>
                </div>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                {data.data.map((datum) => {
                    return (<div className="accordion-content">
                        <div className="role-container">
                            {datum.positions.map((position) => {
                                return (
                                    <RoleBox content={position}></RoleBox>

                                )
                            })}
                        </div>
                        <div>
                            <div className="accordion-content-content">
                                {datum.content}
                            </div>
                        </div>

                    </div>
                    )
                })}

            </Accordion.Content>
        </Accordion>
    );
}