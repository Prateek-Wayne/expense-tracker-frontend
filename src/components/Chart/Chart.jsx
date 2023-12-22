import React from "react";
import { useGetIncomesQuery } from "../../services/incomeAPI";
import { useGetExpenseQuery } from "../../services/expenseAPI";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  registerables,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, ...registerables);

const ChartData = () => {
  const { isLoading, isError, isSuccess, data: incomes } = useGetIncomesQuery();
  const { isSuccess: isSuccess2, data: expenses } = useGetExpenseQuery();
  let data;
  if (isSuccess && isSuccess2) {
    data = {
      labels: incomes?.message?.map((inc) => {
        return new Date(inc.date).toLocaleDateString();
      }),
      datasets: [
        {
          label: "Income",
          data: incomes?.message?.map((income) => income.amount),
          backgroundColor: "green",
          tension: 0.5,
        },
        {
          label: "Expenses",
          data: expenses?.message?.map((expense) => expense.amount),
          backgroundColor: "red",
          tension: 0.5,
        },
      ],
    };
  }
  return <div>{isSuccess && isSuccess2 && <Line data={data} height="100%" />}</div>;
};

export default ChartData;
