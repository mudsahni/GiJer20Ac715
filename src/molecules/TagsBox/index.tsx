import * as React from 'react'
import { Accordion, Header, Icon, Label } from 'semantic-ui-react';
import './style.css'

interface TagsBoxProps {
    tags: string[];
}

export const TagsBox: React.FC<TagsBoxProps> = ({ tags }) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0)
    const handleClick = (e: React.SyntheticEvent, titleProps: any) => {
        const { index } = titleProps
        const _activeIndex = activeIndex
        const newIndex = _activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }
    const iconType: any = activeIndex === 0 ? "chevron up" : "chevron down"


    const colors: any = ["red", "orange", "yellow", "olive", "green", "teal",
        "blue", "violet", "purple", "pink", "brown", "grey", "black"]

    return (


        <div className="tags-box">
            {
                tags.map((tag, index) => {
                    return (<Label color="grey" key={index}>
                        {tag}
                    </Label>)

                })}
        </div>
    );
}

{/* <Accordion>
    <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
    >
        <div className="accordion-title">

            <Header as='h4' className="ratings-box-header"><span className="underlined-heading orange-underline">tags</span></Header><Icon name={iconType} size="small"></Icon>

        </div>

    </Accordion.Title>
    <Accordion.Content active={activeIndex === 0}>

        <div className="tags-box">
            {
                tags.map((tag, index) => {
                    return (<Label color="grey" key={index}>
                        {tag.toLowerCase()}
                    </Label>)

                })}
        </div>
    </Accordion.Content>
</Accordion> */}
