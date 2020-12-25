import * as React from 'react'
import { Button, Container, Grid, Header } from 'semantic-ui-react';
import { Box } from '../../atom/Box';
import { MeBox } from '../../molecules/MeBox';
import { NavBox } from '../../molecules/NavBox';
import MuditSahniInformation from './content'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <Container className="vertical-padding-container">
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Box scaleTransform={false}>

                            <NavBox active="home" />
                        </Box>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Box scaleTransform={false}>
                            <MeBox
                                imagePath='./shiba.png'
                                data={MuditSahniInformation} />
                        </Box>
                        {/* <Box scaleTransform={false}>
                            <NavBox active="home" />
                        </Box> */}
                        <Button disabled color="olive" style={{ width: '100%', height: '60px' }}>Contact</Button>
                    </Grid.Column>
                    <Grid.Column width={11} style={{ height: '100vh', backgroundColor: "black" }}>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
    );
}