import {  Button, Card, CardActions, CardContent, CardHeader,  TextField, Typography } from "@mui/material";
import React from 'react'
import './Login.css'
const Login = () => {

    return (
        <div className="login">
            <Card>
                <CardHeader title="Login" subheader="enter login details" />
                <CardContent>
                   <div className="inputs">
                    <TextField
                        required
                        id="filled-required"
                        label="email"
                        variant="outlined"
                        type="input"
                    />
                    </div>
                    <div className="inputs">
                    <TextField
                        required
                        id="filled-required"
                        label="password"
                        variant="outlined"
                        type="password"
                    />
                    </div>        
                </CardContent>
                <CardActions>
                    <Button variant="outlined" href="/register">Register</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login