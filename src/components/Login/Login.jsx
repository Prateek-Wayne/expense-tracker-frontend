import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import React from 'react'
import './Login.css'
import { useLoginMutation } from "../../services/loginAPI";
import { useCookies } from "react-cookie";

const Login = () => {
    const [login,{ isLoading,isSuccess, isError, data, error }] = useLoginMutation();
    // console.log("🚀 ~ file: Login.jsx:9 ~ Login ~  isLoading,isSuccess, isError, data, error:",  isLoading,isSuccess, isError, data, error)
    const [cookie, setCookie] = useCookies(['token']);
    const handleLogin = async () => {
        console.log('Before login:', isLoading, isSuccess, isError, data, error);
        try {
            const { data } = await login({ email: 'local@gmaill.com', password: 'password' }); 
            console.log('After login:', isLoading, isSuccess, isError, data, error);
            if (isLoading) {
                console.log('Loading...');
            }
            if (isSuccess) {
                console.log('Login successful');
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };
    console.log("After some time Error is comign as ",error);
    
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
                    <Button variant="outlined" onClick={handleLogin} >LOGIN </Button>
                    <Button variant="outlined" href="/register">Register</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Login