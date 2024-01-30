import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";import { mutationLogin } from "./mutation";
 ''


const Auth = () => {
    
    const { data, mutate }= useMutation(
        {mutationKey:['login'], 
        mutationFn: mutationLogin})

    const handLogin=async()=>{
        await mutate;
    };

    return (
        
        <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="teal" textAlign="center">Welcome! Login as Guest</Header>
                <Form  size="large">
                    <Segment stacked>
                        <Button color="violet" size="large" fluid onClick={handLogin}>{""}Login</Button>
                    </Segment>
                </Form>
                </Grid.Column>
        </Grid>
    )
}

export default Auth;