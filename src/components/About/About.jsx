import React from "react";
import {
  Typography,
  Container,
  Avatar,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import linkedinLogo from "../../images/linkedin.png";
import instaLogo from "../../images/instagram.png";
import githubLogo from "../../images/github.png";

const About = () => {
  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="AboutMe" />
        <CardContent>
          <Typography variant="body2">
            Hello! I'm a passionate software developer with a keen interest in
            web development and data visualization. I love exploring new
            technologies and using them to solve complex problems.
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="body2">
                I recently completed a project where I used a variety of
                technologies to create a dynamic and interactive web
                application. Here are some of the key technologies I used:
              </Typography>
              <Typography variant="body1">
                <ul>
                  <li>
                    React.js: A JavaScript library for building user interfaces.
                  </li>
                  <li>
                    Redux Toolkit: A powerful tool for managing application
                    state. I used RTK Query, a library built into Redux Toolkit,
                    to simplify data fetching and caching. This allowed me to
                    efficiently manage the application's data and ensure a
                    smooth user experience.
                  </li>
                  <li>
                    Material-UI: A popular React UI framework that allowed me to
                    build a modern, responsive UI with pre-built components.
                  </li>
                  <li>
                    Chart.js and react-chartjs-2: Libraries that I used to
                    create beautiful, interactive charts for data visualization.
                  </li>
                  <li>
                    Axios: A promise-based HTTP client for making asynchronous
                    requests.
                  </li>
                  <li>
                    Moment.js: A library that I used to manipulate and format
                    dates.
                  </li>
                  <li>
                    Millify: A utility used to convert large numbers into
                    human-readable strings.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            href="https://www.linkedin.com/in/prateek-verma-8125b3201/"
          >
            <Avatar src={linkedinLogo} />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            href="https://www.instagram.com/prateek_wayne/"
          >
            <Avatar src={instaLogo} />
          </IconButton>
          <IconButton
            aria-label="add to favorites"
            href="https://github.com/Prateek-Wayne"
          >
            <Avatar src={githubLogo} />
          </IconButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default About;
