import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import "./Register.css";
import { useRegisterMutation } from "../../services/registerAPI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading, isSuccess, isError, data, error }] =
    useRegisterMutation();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({
        fullname: username,
        email,
        password,
      });
    } catch (error) {
      console.error("Failed to login:", error);
    }
    setUserName("");
    setEmail("");
    setPassword("");
  };

  if (isLoading) {
    toast.info("Request Send", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "loading1",
      autoClose: 1000,
    });
  }
  if (isSuccess) {
    toast.success("Resgistration successfull !", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "success1",
      autoClose: 1000,
    });
    navigate("/login");
  }
  else if (isError) {
    toast.error(`${error?.message|| error?.data?.msg}`, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "error1",
    });
  }
  console.log(error);
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
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
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
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default Register;
