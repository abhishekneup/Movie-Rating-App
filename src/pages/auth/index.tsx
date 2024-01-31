import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";


const Auth = () => {
    
    const { data , mutate }= useMutation(
        {mutationKey:['login'], 
        mutationFn: mutationLogin});

        let navigate = useNavigate();

    const handLogin=async()=>{
        await mutate;
        localStorage.setItem("guest_session_id",data.guest_session_id);
        navigate("/rated");

    };

    return (
        
        <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="teal" textAlign="center">Welcome! Login as Guest</Header>
                <Form  size="large">
                    <Segment stacked>
                        <Button color="teal" size="large" fluid onClick={handLogin}>{""}Login</Button>
                    </Segment>
                </Form>
                </Grid.Column>
        </Grid>
    )
}

export default Auth;