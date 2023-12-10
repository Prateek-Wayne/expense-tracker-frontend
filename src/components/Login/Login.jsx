import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import React from 'react'
import './Login.css'
import { useLoginMutation } from "../../services/loginAPI";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const navigate = useNavigate();
    const [login,{ isLoading,isSuccess, isError, data, error }] = useLoginMutation();
    const [cookie, setCookie] = useCookies(['token']);
    const handleLogin = async () => {
        try {
            const { data } = await login({ email: 'local@gmail.com', password: 'password' }); 
            if(data?.token)
            {
                setCookie("token",data?.token);
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };
    if(!cookie?.token)
    {toast.warn("Please Login First",{
        position: toast.POSITION.TOP_RIGHT,
        toastId:'loading1'
    })

    }
    if(isLoading)
    {
        toast.info("Request Send",{
            position: toast.POSITION.TOP_RIGHT,
            toastId:'loading1'
        })
    }
    if (isSuccess) {
        toast.success("Login successfull !", {
            position: toast.POSITION.TOP_RIGHT,
            toastId:'success1'
          });
          navigate('/');
    }
    if (isError) {
        toast.error("Error  !", {
            position: toast.POSITION.TOP_RIGHT,
            toastId:'error1'
          });
    }
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