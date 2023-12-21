import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./Form.css";
import { useCreateIncomeMutation } from "../../services/incomeAPI";
import { useCookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

import notitfactionToast from "./notification";
import { useCreateExpenseMutation } from "../../services/expenseAPI";

const Form = ({ heading }) => {
  const [cookie] = useCookies(["token"]);

  // console.log("Cookie", cookie?.token);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [createIncome, { isLoading, isSuccess, isError, data, error }] =
    useCreateIncomeMutation();
  const [createExpense,{ isLoading:isLoadingE, isSuccess:isSuccessE, isError:isErrorE, data:dataE, error:errorE }] = useCreateExpenseMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      title,
      amount,
      type,
      date,
      description,
    };
    // console.log("Submit from form income");
    try {
      heading==='INCOME'? await createIncome(obj): await createExpense(obj);
    } catch (error) {
      console.error("Failed to login:", error);
    }
    setType("");
    setTitle("");
    setAmount("");
    setDate("");
    setDescription("");
  };
  heading==="INCOME"?notitfactionToast(isLoading, isError, isSuccess):notitfactionToast(isLoadingE,isErrorE,isSuccessE);

  // console.log(
  //   "🚀 ~ file: Form.jsx:41 ~ Login ~ isLoading, isSuccess, isError, data, error:",
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   data,
  //   error
  // );
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Card sx={{ backgroundColor: "rgba(195, 242, 253, 0.985)" }}>
          <CardHeader title={`${heading} 💸`} />
          <CardContent>
            <div className="inputs">
              <TextField
                required
                id="filled-required"
                label="salary-title"
                variant="filled"
                type="input"
                fullWidth="100%"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="inputs">
              <TextField
                required
                id="filled-required"
                label="salary-amount"
                variant="filled"
                type="number"
                fullWidth="100%"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="inputs">
              <TextField
                required
                id="filled-required"
                variant="filled"
                type="date"
                fullWidth="100%"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="select">
              <InputLabel>Select Option</InputLabel>
              <Select
                labelId="select"
                id="select"
                label="Select Option"
                variant="filled"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={"salary"}>Salary</MenuItem>
                <MenuItem value={"freelancing"}>Freelancing</MenuItem>
                <MenuItem value={"youtube"}>Youtube</MenuItem>
              </Select>
            </div>
            <div className="inputs">
              <TextField
                required
                id="filled-required"
                label="description"
                type="input"
                fullWidth
                multiline
                rows={3}
                variant="filled"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ borderRadius: "20px" }}
            >
              <AddIcon /> Submit
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default Form;

{
  /* <div className="input-control">
          <input
            type="text"
            // value={title}
            name={'title'}
            placeholder="Salary Title"
          // onChange={handleInput('title')}
          />
        </div>
        <div className="input-control">
          <input
            type="text"
            name={'amount'}
            placeholder={'Salary Amount'}
          // onChange={handleInput('amount')} 
          />
        </div>
        <div className="input-control">
          Date here
        </div>
        <div className="selects input-control">
          <select required name="category" id="category" >
            <option value="" disabled >Select Option</option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-control">
          <textarea name="description" placeholder='Add A Reference' id="description" cols="30" rows="4" ></textarea>
        </div>
        <div className="submit-btn">
          <button
            name={'Add Income'}
            // icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent'}
            color={'#fff'}
          />
        </div> */
}
