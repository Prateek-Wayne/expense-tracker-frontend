import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDeleteExpenseMutation } from "../../services/expenseAPI";
import "./SingleExpense.css";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Button,
} from "@mui/material";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

const SingleExpense = ({ expense }) => {
  const date = new Date(expense?.date).toLocaleDateString();
  const [deleteExpense, { isSuccess, isError, error, data }] =
    useDeleteExpenseMutation();
  const handleDelete = async () => {
    await deleteExpense(expense?._id);
  };
  return (
    <Grid margin={1}>
      <Card
        style={{
          backgroundColor: "rgba(195, 242, 253, 0.985)",
          borderRadius: "15px",
          padding: "10px",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Chip label={expense?.type} color="primary" />
            <Typography variant="h5" style={{ marginLeft: "10px" }}>
              {expense?.title}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <AttachMoneyIcon color="success" />
              <Typography
                variant="h6"
                style={{ marginRight: "10px", color: "gold" }}
              >
                {expense?.amount}
              </Typography>
              <DateRangeOutlinedIcon color="action" />
              <Typography variant="body1">{date}</Typography>
            </div>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="secondary"
            >
              Delete
              <DeleteOutlineOutlinedIcon />
            </Button>
          </div>
          <div style={{display:"flex"}}>
          <MessageOutlinedIcon/>
          <Typography variant="subtitle2" color="textSecondary">
            {expense?.description}
          </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleExpense;
