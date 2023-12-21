import React from "react";
import Form from "../Form/Form";
import SingleIncome from "./SingleIncome";
import { useGetIncomesQuery } from "../../services/incomeAPI";
import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Income = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetIncomesQuery();
  console.log(
    "Data from get Incomes :",
    isLoading,
    isError,
    isSuccess,
    data,
    error
  );

  return (
    <Grid container spacing={2}>
      <Grid item md={7} xs={12}>
        <Form heading={"INCOME"} />
      </Grid>
      <Grid item md={5} xs={12}>
        {data?.message?.map((income, index) => {
          return <SingleIncome key={index} income={income} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Income;
