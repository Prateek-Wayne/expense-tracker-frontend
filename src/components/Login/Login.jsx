import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { useLoginMutation } from "../../services/loginAPI";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading, isSuccess, isError, data, error }] =
    useLoginMutation();
  const [cookie, setCookie] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit triggered", email, password);

    try {
      const { data2 } = await login({ email, password });
      console.log("Inside the If Condition", data, data2, error);
    } catch (error) {
      console.error("Failed to login:", error);
    }

    setEmail("");
    setPassword("");
  };
  if (isLoading) {
    toast.info("Request Send", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "loading1",
      autoClose: 200
    });
  }

  if (isError) {
    toast.error("Oops Worng Email/Password  !", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "error1",
      autoClose: 2000
    });
  }
  useEffect(()=>{
    if (!cookie?.token) {
      toast.warn("Please Login First", {
        position: toast.POSITION.TOP_LEFT,
        toastId: "loading1",
      });
    }
  },[])
  useEffect(() => {
    if (data?.token) {
      setCookie("token", data?.token);
    }
    if (isSuccess && data?.token) {
      toast.success("Login successful !", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: "success1",
        autoClose: 2000
      });
      navigate("/");
    }
  }, [isSuccess, data]);

  return (
    <div className="login">
      <Card sx={{ backgroundColor: "rgba(195, 242, 253, 0.985)" }}>
        <CardHeader title="Login" subheader="enter login details" />
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="inputs">
              <TextField
                required
                id="filled-required"
                label="email"
                variant="outlined"
                type="input"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button variant="outlined" type="submit">
              Submit{" "}
            </Button>
            <Button variant="outlined" href="/register">
              Register
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default Login;
