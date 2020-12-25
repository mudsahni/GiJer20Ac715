import * as React from 'react'
import { Accordion, Divider, Header, Icon, Image, Popup } from 'semantic-ui-react';
import './style.css'

interface RegularBoxProps {
    header: string;
    regularData: { title: string, id: string, link?: string }[]
}

const popupStyle = {
    borderRadius: '6px',
    border: '1px dashed var(--box-border-color)',
    boxShadow: 'none',
    color: 'var(--header-color)',
    letterSpacing: '0.01rem'
}
export const RegularBox: React.FC<RegularBoxProps> = ({ header, regularData }) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0)
    const handleClick = (e: React.SyntheticEvent, titleProps: any) => {
        const { index } = titleProps
        const _activeIndex = activeIndex
        const newIndex = _activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    const iconType: any = activeIndex === 0 ? "chevron up" : "chevron down"


    return (
        <div className="ratings-container">
            <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >
                    <div className="accordion-title">

                        <Header as='h4' className="ratings-box-header">{header}</Header><Icon name={iconType} size="small"></Icon>

                    </div>

                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>

                    {regularData.map((item, index) => {
                        return (<div className="ratings" key={index}>
                            {item.hasOwnProperty("link") ?
                                <a href={item.link} target="_blank">
                                    <Header as="h5">
                                        {/* <Icon name="linkify" size="small"></Icon> */}

                                        <Header.Content>
                                            {item.title}
                                            <Header.Subheader>
                                                {item.id}
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </a>
                                :
                                <Header as="h5">
                                    <Header.Content>
                                        {item.title}
                                        <Header.Subheader>
                                            {item.id}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>

                            }
                        </div>)

                    })}
                </Accordion.Content>

            </Accordion>



        </div>
    );
}