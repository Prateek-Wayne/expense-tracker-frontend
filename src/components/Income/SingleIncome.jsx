import React from "react";
import { Card, CardContent, Typography, Grid, Chip,Button } from "@mui/material";
import "./SingleIncome.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { useDeleteIncomeMutation } from "../../services/incomeAPI";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const SingleIncome = ({ income }) => {
  const date=new Date(income?.date).toLocaleDateString();
  const [deleteIncome, { isSuccess,isError, error, data }] = useDeleteIncomeMutation();
  const handleDelete=async ()=>{
    await deleteIncome(income?._id);
  }
  return (
    <Grid margin={1}>
     <Card style={{ backgroundColor: "rgba(195, 242, 253, 0.985)", borderRadius: '15px', padding: '10px' }}>
    <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Chip label={income?.type} color="primary" />
            <Typography variant="h5" style={{ marginLeft: '10px' }}>
                {income?.title}
            </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <div style={{ display:'flex', alignItems:'center'}}>
                <AttachMoneyIcon color="success"  />
                <Typography variant="h6" style={{ marginRight:'10px',color:"gold" }}>
                    {income?.amount}
                </Typography>
                <DateRangeOutlinedIcon color="action"/>
                <Typography variant="body1">{date}</Typography>
            </div>
            <Button onClick={handleDelete} variant="contained" color="secondary">
              Delete
              <DeleteOutlineOutlinedIcon/>
            </Button> 
        </div>
        <Typography variant='subtitle2' color='textSecondary'>
          {income?.description}
        </Typography> 
    </CardContent>
</Card>

    </Grid>
  );
};

export default SingleIncome;
