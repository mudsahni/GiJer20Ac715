import * as React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import './style.css'

interface SocialListProps {

}

export const SocialList: React.FC<SocialListProps> = ({ }) => {
    return (
        <div className="social-list">

            <div><Icon name="github square" size="big" className="github" link={true}></Icon><a href="https://www.github.com/mudsahni" target="_blank">https://www.github.com/mudsahni</a></div>
            <div><Icon name="linkedin square" size="big" className="linkedin" color="blue" link={true}></Icon><a href="https://www.linkedin.com/in/mudit-sahni" target="_blank">https://www.linkedin.com/in/mudit-sahni</a></div>

        </div>
    );
}