import React from "react";
import Form from "../Form/Form";
import {Grid} from '@mui/material'
const Expense = () => {
  return (
    <Grid  margin={1} xs={12}>
      <Form heading={"EXPENSE"} />
    </Grid>
  );
};

export default Expense;
