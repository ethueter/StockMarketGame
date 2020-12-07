import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
const SignIn = () => {
    
=======
>>>>>>> Stashed changes
import Auth from '../services/auth';



const SignIn = (props) => {
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [ login, setLogin ] = useState(true);
    const [ verified, setVerified ] = useState(false)

    const handleChange = (event) => {
        if (event.target.id == "username") {
<<<<<<< Updated upstream
            console.log(event.target.value)
            setUsername(event.target.value);
        } else if (event.target.id == "password") {
            console.log(event.target.value);
=======
            
            setUsername(event.target.value);
        } else if (event.target.id == "password") {
            
>>>>>>> Stashed changes
            setPassword(event.target.value);
        }
    }

    const verifyPassword = (event) => {
        if(event.target.value == password) setVerified(true);
    }

    const loginUser = () => {
        Auth.login(username, password)
        .then(() => {
          
            props.history.push("/home");
        });
    };

    const createUser = () => {
        Auth.newUser(username, password)
            .then(() => {
                props.history.push("/home");
            });
    };
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes

    return (
      <div className="SignIn-container">
        {login ? (
          <Card className="SignIn-card" variant="outlined">
            <CardHeader title="Sign In" />
            <CardContent className="LoginCard-content">
              <TextField
                required
                id="username"
                helperText="Username"
                onChange={event => handleChange(event)}
              />
              <TextField
                required
                id="password"
                type="password"
                helperText="Password"
                onChange={event => handleChange(event)}
              />
            </CardContent>
            <CardContent>
              <Button onClick={loginUser}>Submit</Button>
              <Button onClick={() => setLogin(false)}>Create Account</Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="SignIn-card" variant="outlined">
            <CardHeader title="Sign Up" />
            <CardContent className="LoginCard-content">
              <TextField
                required
                id="username"
                helperText="Username"
                onChange={event => handleChange(event)}
              />
              <TextField
                required
                id="password"
                type="password"
                helperText="Password"
                onChange={event => handleChange(event)}
              />
              <TextField
                  required
                  id="password-verify"
                  type="password"
                  helperText="Re-Type Password"
                  onChange={event => verifyPassword(event)}
              />
            </CardContent>
            <CardContent>
                {verified ? 
                  <Button onClick={createUser}>Create Account</Button> : <Button disabled>Create Account</Button>}
                <Button onClick={() => setLogin(true)}>Return to Login</Button>                
            </CardContent>
          </Card>
        )}
      </div>
    );
}

export default SignIn;