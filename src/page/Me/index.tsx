import * as React from 'react'
import { Button, Container, Divider, Grid } from 'semantic-ui-react';
import { Box } from '../../atom/Box';
import { RatingsBox } from '../../molecules/RatingsBox';
import { MeBox } from '../../molecules/MeBox';
import { NavBox } from '../../molecules/NavBox';
import {
    MeData, languageRatings,
    frameworkRatings, tags,
    certificateData, expediaPanel,
    gartnerPanel, techMahindraPanel, languages,
    frameworks,
    projectsData, certificates, expediaExperience, gartnerExperience, techmahindraExperience, universityPanel, schoolPanel
} from './content';
import { CVMainBox } from '../../molecules/CVMainBox';
import { RegularBox } from '../../molecules/RegularBox';
import { CompanyAccordion } from '../../molecules/CompanyAccordion';
import './style.css'
import { GrowthBar } from '../../molecules/GrowthBar';
import { SkillsBox } from '../../molecules/SkillsBox';
import { OtherBox } from '../../molecules/OtherBox';
import { RoleBox } from '../../molecules/RoleBox';

interface MeProps {

}
const roleData = [
    {
        position: "start",
        title: "Associate Software Development Engineer",
        team: "Behaviour Experimentation Platform",
        dates: <span>Oct 2017&ndash;Mar 2019</span>,
        current: false
    },

    {
        position: "end",
        title: "Software Development Engineer I",
        team: "Behaviour Experimentation Platform",
        dates: <span>March 2019&ndash;</span>,
        current: true
    }
]


export const Me: React.FC<MeProps> = ({ }) => {
    return (
        // <Container className="vertical-padding-container">
        <React.Fragment>
            <Grid stackable>
                {/* <Grid.Row>
                    <Grid.Column width={16}>
                        <Container className="vertical-padding-container">
                            <div className="mudit-logo">
                                <span>mudit sahni</span>
                            </div>
                        </Container>

                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row>
                    {/* <Grid.Column width={16}>
                    <Container>
                        <Box scaleTransform={false}>

                            <NavBox active="me" />
                        </Box>
                    </Container>
                </Grid.Column>
 */}
                    <Grid.Column width={16}>
                        <div className="me-box-container">
                            <Container>

                                <MeBox
                                    imagePath='./mudit.png'
                                    data={MeData} />

                            </Container>
                        </div>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/* <hr className="section-separator"></hr> */}
            <Divider />

            <Container>

                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <SkillsBox data={{ title: "frameworks", skills: frameworks }} />

                            <SkillsBox data={{ title: "programming languages", skills: languages }} />
                            <OtherBox data={{ title: "projects", skills: projectsData }} />
                            <OtherBox data={{ title: "certifications", skills: certificates }} />

                            <SkillsBox data={{ title: "languages", skills: ["English", "Hindi"] }} />
                            <SkillsBox data={{
                                title: "interests", skills: ["Astronomy", "Computer Science", "Literature", "History", "Biology",
                                    "Game Development", "Simulation", "Digital Illustration", "Neuroscience"]
                            }} />

                        </Grid.Column>

                        <Grid.Column width={11} className="divide-by-borders-grid-column">
                            <CVMainBox title="professional experience" >
                                <CompanyAccordion data={expediaExperience} />
                                <CompanyAccordion data={gartnerExperience} />
                                {/* <CompanyAccordion data={techmahindraExperience} /> */}

                                {/* <CompanyAccordion data={gartnerPanel} />
                            <CompanyAccordion data={techMahindraPanel} /> */}

                            </CVMainBox>
                            <CVMainBox title="education" >
                                <RoleBox content={universityPanel.data[0].positions[0]}></RoleBox>
                                <RoleBox content={schoolPanel.data[0].positions[0]}></RoleBox>


                            </CVMainBox>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
            <Divider />

            <Container>

                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div className="footer">
                                <span>impatiently created by</span>
                                <span className="highlighted-word"><a href="http://www.muditsahni.com" target="_blank">mudit sahni</a></span>
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        </React.Fragment >
        // </Container>

    );
}