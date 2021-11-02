import * as React from 'react'
import { Grid, Header, Icon, Image } from 'semantic-ui-react'
import { SocialList } from '../../atom/SocialList'
import { tags } from '../../page/Me/content'
import { TagsBox } from '../TagsBox'
import './style.css'

interface MeBoxProps {
    imagePath: string;
    data: { name: string, profile: string, about: JSX.Element }
}

export const MeBox: React.FC<MeBoxProps> = ({ imagePath, data }) => {
    return (
        <div className="me">
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={13}>

                        <div className="me-box">
                            <Header as="h1" image>
                                <Image src={imagePath} size='massive' rounded hidden />

                                <Header.Content>
                                    <span className="my-name">{data.name}</span>
                                    <Header.Subheader>
                                        <span>{data.profile}</span>
                                    </Header.Subheader>
                                </Header.Content>

                            </Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3}>

                        <div className="contact-info">
                            <div><Icon name="phone" color="blue"></Icon><span>+91-9971847430</span></div>
                            <div><Icon name="mail" color="blue"></Icon><span>muditsahni@msn.com   </span></div>
                            <div><Icon name="home" color="blue"></Icon><span>New Delhi, India</span></div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <div className="about-me">
                            {data.about}

                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <TagsBox tags={tags} />


                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <SocialList />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}