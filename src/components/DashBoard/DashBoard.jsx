import React from "react";
import ChartData from "../Chart/Chart";
import {
  Grid,
  Card,
  Typography,
  Box,
  CardHeader,
  CardContent,
  Chip
} from "@mui/material";
import { useGetIncomesQuery } from "../../services/incomeAPI";
import { useGetExpenseQuery } from "../../services/expenseAPI";
import LinearProgress from "@mui/material/LinearProgress";

const DashBoard = () => {
  const {
    isLoading: isLoadingIncome,
    isError,
    isSuccess,
    data: incomes,
  } = useGetIncomesQuery();
  const {
    isLoading: isLoadingExpense,
    isSuccess: isSuccess2,
    data: expenses,
  } = useGetExpenseQuery();
  // totals...
  let totalIncome = incomes?.message?.reduce(
    (total, item) => total + item.amount,
    0
  );
  let totalExpense = expenses?.message?.reduce(
    (total, item) => total + item.amount,
    0
  );
  // history... max content...
  let sortedData;
  let maxIncome;
  let maxExpense;
  if (isSuccess && isSuccess2) {
    sortedData = [...incomes?.message, ...expenses?.message]?.sort(
      (a, b) => new Date(a?.date) - new Date(b?.date)
    );
    maxIncome = [...incomes?.message].sort((a, b) => b?.amount - a?.amount);
    maxExpense = [...expenses?.message].sort(
      (a, b) => b?.amount - a?.amount
    );
  }

  return (
    <Grid container>
      <Grid xs={12} md={7} margin={1} sx={{display:'flex', flexDirection:'column', justifyContent:"center"}}>
        <Card sx={{ width: "100%" }}>
          <CardHeader title="DashBoard" />
          {(isLoadingIncome || isLoadingExpense) && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress color="secondary" />
              <LinearProgress color="success" />
              <LinearProgress color="inherit" />
            </Box>
          )}
          {(isSuccess || isSuccess2) && <ChartData />}
        </Card>
        <Grid container marginTop="10px" sx={{display:'flex', justifyContent:"center"}} >
          <Grid xs={12} md={5} margin={1} >
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70px",
              }}
            >
              <Typography variant="h6" color='rgb(89, 242, 91)'>Total Income : {totalIncome}</Typography>
            </Card>
          </Grid>
          <Grid xs={12} md={5} margin={1} >
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70px",
              }}
            >
              <Typography variant="h6" color='rgb(255, 71, 71)' >Total Expense : {totalExpense}</Typography>
            </Card>
          </Grid>
          <Grid xs={12} md={10} margin={1}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70px",
              }}
            >
              <Typography variant="h4" color="yellow">Balance: {totalIncome - totalExpense}</Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} md={4.5} margin={1}>
        {
          <>
            <Chip label='Recent Transaction' variant="filled" color="info"   />
            {sortedData?.slice(0,10).map((transaction, index) => {
              return (
                <Card
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "10px",
                    height: "30px",
                  }}
                >
                  <Typography variant="h5" color={transaction?.content==='expense'?'rgb(89, 242, 91)':'rgb(255, 71, 71)'} >{transaction?.title}</Typography>
                  <Typography variant="h6" color='purple'>{transaction?.amount}</Typography>
                </Card>
              );
            })}
          </>
        }
        {(isSuccess && isSuccess2) && <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={12} md={5.5} margin={1}>
            <Card>
            <CardContent>
                <Typography variant="h5" color="rgb(89, 242, 91)">Max Income :{maxIncome[0]?.amount}</Typography>
                <Typography variant="h5" color="rgb(89, 242, 91)">Min  Income :{maxIncome[maxIncome?.length-1]?.amount}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={5.5} margin={1}>
            <Card>
            <CardContent>
                <Typography variant="h5" color="rgb(255, 71, 71)">Max Expense : {maxExpense[0]?.amount}</Typography>
                <Typography variant="h5" color="rgb(255, 71, 71)">Min Expense : {maxExpense[maxExpense?.length-1]?.amount}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>}
      </Grid>
    </Grid>
  );
};

export default DashBoard;
