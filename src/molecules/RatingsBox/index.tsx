import * as React from 'react'
import { Accordion, Header, Icon, Image, Popup } from 'semantic-ui-react';
import { LevelSquares } from '../../molecules/LevelSquares';
import './style.css'

interface RatingsBoxProps {
    header: string;
    ratingsData: { icon: string, title: string, rating: number, popup?: string }[]
}

const popupStyle = {
    borderRadius: '6px',
    border: '1px dashed var(--box-border-color)',
    boxShadow: 'none',
    color: 'var(--header-color)',
    letterSpacing: '0.01rem'
}
export const RatingsBox: React.FC<RatingsBoxProps> = ({ header, ratingsData }) => {
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

                        <Header as='h4' className="ratings-box-header"><span className="underlined-header orange-underline">{header}</span></Header><Icon name={iconType} size="small"></Icon>
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>

                    {ratingsData.map((ratingItem, index) => {
                        return (<div className="ratings" key={index}>
                            <Image src={`./${ratingItem.icon}`} size="mini"></Image>
                            {ratingItem.hasOwnProperty("popup") ? <Popup basic style={popupStyle} content={ratingItem.popup} trigger={<span>{ratingItem.title}</span>}></Popup>
                                : <span>{ratingItem.title}</span>}
                            <LevelSquares rating={ratingItem.rating} />
                        </div>)

                    })}
                </Accordion.Content>

            </Accordion>



        </div>
    );
}