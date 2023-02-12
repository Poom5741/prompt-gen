import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  response: {
    marginTop: theme.spacing(2),
    fontFamily: "monospace",
  },
}));

const App = () => {
  const [response, setResponse] = useState("");
  const classes = useStyles();

  const callAPI = async () => {
    try {
      const res = await fetch("http://95.216.202.238:5000/");
      const json = await res.json();
      setResponse(JSON.stringify(json, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <Box className={classes.root}>
      <Button variant="contained" color="primary" onClick={callAPI} className={classes.button}>
        Get API Response
      </Button>
      {response && (
        <Typography variant="body2" className={classes.response}>
          {response}
        </Typography>
      )}
    </Box>
  );
};

export default App;

