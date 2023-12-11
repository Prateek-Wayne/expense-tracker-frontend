import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from "@mui/material";
import './Register.css'
import { useRegisterMutation } from '../../services/registerAPI';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    const navigate = useNavigate();
    const [register,{ isLoading,isSuccess, isError, data, error }] = useRegisterMutation();
    const [cookie, setCookie] = useCookies(['token']);
    const [email,setEmail]=useState('');
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit triggered", email, password);
        
        try {
            const { data } = await register({ username,email, password }); 
            if (data?.token) {
                setCookie("token", data?.token);
            }
        } catch (error) {
            console.error('Failed to login:', error);
        }
        setUserName("");
        setEmail("");
        setPassword("");
    }
    console.log("Success",isSuccess);
    if(!cookie?.token)
    {toast.warn("Please Login First",{
        position: toast.POSITION.TOP_LEFT,
        toastId:'loading1'
    })

    }
    if(isLoading)
    {
        toast.info("Request Send",{
            position: toast.POSITION.TOP_RIGHT,
            toastId:'loading1',
            autoClose:1000
        })
    }
    if (isSuccess) {
        toast.success("Login successfull !", {
            position: toast.POSITION.TOP_RIGHT,
            toastId:'success1',
            autoClose:1000
          });
          navigate('/');
    }
    if (isError) {
        toast.error("Oops Worng Email/Password  !", {
            position: toast.POSITION.TOP_RIGHT,
            toastId:'error1',
          });
    }
  return (
    <div className="login">
    <Card>
        <CardHeader title="Register" subheader="enter login details" />
        <form onSubmit={handleSubmit}>
        <CardContent>
            <div className="inputs">
                <TextField
                    required
                    id="filled-required"
                    label="username"
                    variant="outlined"
                    type="input"
                    value={username}
                    onChange={(e)=>{setUserName(e.target.value)}}
                />
            </div>
            <div className="inputs">
                <TextField
                    required
                    id="filled-required"
                    label="email"
                    variant="outlined"
                    type="input"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="inputs">
                <TextField
                    required
                    id="filled-required"
                    label="password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
        </CardContent>
        <CardActions>
            <Button variant="outlined" type="submit">LOGIN </Button>
            <Button variant="outlined" href="/register">Register</Button>
        </CardActions>
        </form>
    </Card>
</div>
  )
}

export default Register