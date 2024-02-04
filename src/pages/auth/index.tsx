import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";


const Auth = () => {
    
    const { data , mutate }= useMutation(
        {mutationKey:['login'], 
        mutationFn: mutationLogin});

    
    let navigate = useNavigate();
    
    const handleLogin = async () => {
        try {
        
          await mutate();
    
          //  if data is available before accessing 
          if (data && data.guest_session_id) {
            localStorage.setItem("guest_session_id", data.guest_session_id);
            navigate("/");
          } else {
            console.error("No guest_session_id in the mutation response data.");
          }
        } catch (error) {
          console.error("Error during login mutation:", error);
         
        }
      };
    

    return (
        
        <Grid textAlign="center" verticalAlign="middle" style={{height:"100vh"}}>
            <Grid.Column style={{maxWidth: 450}}>
                <Header as="h2" color="teal" textAlign="center">Welcome! Login as Guest</Header>
                <Form  size="large">
                    <Segment stacked>
                        <Button color="teal" size="large"fluid onClick={handleLogin}>Login</Button>
                    </Segment>
                </Form>
                </Grid.Column>
        </Grid>
    )
}

export default Auth;