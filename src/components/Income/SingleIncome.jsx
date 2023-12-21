import React from "react";
import { Card, CardContent, Typography, Grid, Chip,Button } from "@mui/material";
import "./SingleIncome.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { useDeleteIncomeMutation } from "../../services/incomeAPI";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const SingleIncome = ({ income }) => {
  const [deleteIncome, { isSuccess,isError, error, data }] = useDeleteIncomeMutation();
  const handleDelete=async ()=>{
    await deleteIncome(income?._id);
  }
  return (
    <Grid margin={1}>
      <Card sx={{ backgroundColor: "rgba(195, 242, 253, 0.985)" }}>
        <CardContent>
          <div className="Main">
            <div className="One">
              <Chip label={income?.type} />
              <Typography variant="h5" marginLeft={2}>
                {income?.title}
              </Typography>
            </div>
            <div className="COntent">
              <div className="Two">
                <Button onClick={handleDelete}><DeleteOutlineOutlinedIcon/></Button>
              </div>
              <div className="Two">
                <AttachMoneyIcon />
                <Typography variant="body1" marginRight={2}>
                  {income?.amount}
                </Typography>
                <DateRangeOutlinedIcon />
                <Typography variant="body1">{income.date}</Typography>
              </div>
            </div>
            <Typography>{income?.description}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleIncome;
