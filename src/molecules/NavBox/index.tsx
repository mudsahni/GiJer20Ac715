import * as React from 'react'
import { Accordion, Divider, Icon, Image } from 'semantic-ui-react';
import { NavItem } from '../../atom/NavItem';
import './style.css'
interface NavBoxProps {
    active: string;
}

export const NavBox: React.FC<NavBoxProps> = ({ active }) => {
    const [activeIndex, setActiveIndex] = React.useState<number>(-1)
    const handleClick = (e: React.SyntheticEvent, titleProps: any) => {
        const { index } = titleProps
        const _activeIndex = activeIndex
        const newIndex = _activeIndex === index ? -1 : index

        setActiveIndex(newIndex)
    }

    return (
        <div className="nav">
            <NavItem active={active === "home" ? true : false} iconPath="hobbit.svg" title="Home"></NavItem>
            <NavItem active={active === "projects" ? true : false} iconPath="pickles.svg" title="Projects"></NavItem>

            {/* <Accordion>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={handleClick}
                >

                    <div className="menu-title">
                        <Image src="./pickles.svg" size="mini" rounded></Image><span>Projects</span>
                        {activeIndex === 0 ? <Icon name='chevron up' size="small" className="chevron-down" /> : <Icon name='chevron down' size="small" className="chevron-down" />}
                    </div>


                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <div className="menu-content">
                        A dog is a type of domesticated animal. Known for its loyalty and
                        faithfulness, it can be found as a welcome guest in many households
                        across the world.
          </div>

                </Accordion.Content>
 
            </Accordion> */}
            <NavItem active={active === "musings" ? true : false} iconPath="brain.svg" title="Musings"></NavItem>

            <NavItem active={active === "me" ? true : false} iconPath="cthulhu.svg" title="Me"></NavItem>

        </div>
    );
}