import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";

const Auth = () => {
    return (
        <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="teal" textAlign="center">Welcome! Login as Guest</Header>
                </Grid.Column>
        </Grid>
    )
}

export default Auth;