import {
    AppBar,
    Avatar,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React, {  useState } from "react";
  import "./Navbar.css";
  import MenuIcon from "@mui/icons-material/Menu";
  import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
  import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
  import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
  import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
  import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
  import { Link } from "react-router-dom";
  import { useCookies } from "react-cookie";
  import Jetha from '../../images/userJetha.jpeg'
  const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [cookie,setCookie] = useCookies(['token']);
    const handleLogout=()=>{
      console.log("Logout Called")
      setCookie("token",null);
    }

    return (
      <div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, border: "2px solid black " }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Expense -Tracker
            </Typography>
            <Typography variant="body1">Made with ⚡ by Prateek Verma</Typography>
            {(cookie?.token)?
            <Button color="secondary" variant="contained" sx={{margin:"5px"}} onClick={handleLogout} >Logout</Button>
            :<Button color="secondary" variant="contained" sx={{margin:"5px"}} href="/login">Login</Button>
            }
          </Toolbar>
       
        </AppBar>
        <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
          <div className="sidebar">
            
            <List>
              <ListItem>
                <div className="icons">
                  <Link to="/">
                  <Avatar src={Jetha} alt="Jetha" style={{margin:"auto"}} /> 
                  </Link>
                  <Link to="/">
                    <Button>
                      <InsertChartOutlinedIcon />
                      <Typography style={{ margin: "10px" }}>Dashboard</Typography>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      <PriceChangeOutlinedIcon />
                      <Typography style={{ margin: "10px" }}>
                       Transactions
                      </Typography>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      <TrendingUpRoundedIcon />
                      <Typography style={{ margin: "10px" }}>Income</Typography>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      <TrendingDownRoundedIcon />
                      <Typography style={{ margin: "10px" }}>Expense</Typography>
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button>
                      <EngineeringOutlinedIcon />
                      <Typography style={{ margin: "10px" }}>About Me</Typography>
                    </Button>
                  </Link>
                </div>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  };
  
  export default NavBar;
  