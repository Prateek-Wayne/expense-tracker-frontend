import React from "react";
import Form from "../Form/Form";
import { useGetExpenseQuery } from "../../services/expenseAPI";
import {Grid,Box,Chip} from '@mui/material'
import LinearProgress from "@mui/material/LinearProgress";
import SingleExpense from "./SingleExpense";

const Expense = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetExpenseQuery();
  let totalAmount = data?.message?.reduce((total, item) => total + item.amount, 0);
  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12} margin={1}>
        <Form heading={"EXPENSE"} />
      </Grid>
      <Grid item md={5} xs={12}>
        {isLoading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Box>
        )}
        {isSuccess &&
        <>
        <Chip label={totalAmount} color="secondary" />
          {data?.message?.map((expense, index) => {
            return <SingleExpense key={index} expense={expense} />;
          })}
        </>
        }
      </Grid>
    </Grid>
  );
};

export default Expense;
