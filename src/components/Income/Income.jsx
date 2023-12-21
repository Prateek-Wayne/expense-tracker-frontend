import React from "react";
import Form from "../Form/Form";
import SingleIncome from "./SingleIncome";
import { useGetIncomesQuery } from "../../services/incomeAPI";
import { Grid, Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Income = () => {
  const { isLoading, isError, isSuccess, data, error } = useGetIncomesQuery();
  // console.log(
  //   "Data from get Incomes :",
  //   isLoading,
  //   isError,
  //   isSuccess,
  //   data,
  //   error
  // );

  return (
    <Grid container spacing={1}>
      <Grid item md={6} xs={12} margin={1}>
        <Form heading={"INCOME"} />
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
          data?.message?.map((income, index) => {
            return <SingleIncome key={index} income={income} />;
          })}
      </Grid>
    </Grid>
  );
};

export default Income;
