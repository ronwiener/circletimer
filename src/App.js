import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import background from "./assets/background.jpeg";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  timer: {
    padding: "2px",
  },
  text: {
    color: "red",
  },

  background: {
    textAlign: "center",
    backgroundImage: `url(${background})`,
    backgroundPosition: "absolute",
    backgroundSize: "cover",
    height: "60en",
    width: "100%",
    zIndex: -1,
  },

  main: {
    zIndex: 1500,
    opacity: 1,
  },
  timerWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  timer: {
    fontFamily: "Montserrat",
    display: "flex",
    fontSize: "2rem",
    flexDirection: "column",
    alignItems: "center",
  },
  recoverText: {
    color: "#820315",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  goText: {
    color: "#024c42",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  startBtn: {
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "bold",
    marginTop: "6px",
    marginBottom: "1rem",
    width: "180px",
    height: "40px",
    marginRight: "0.5em",
    border: "2px solid black",
    borderRadius: "20px",
    backgroundColor: "#e33010",
    "&:hover": {
      backgroundColor: "white",
      color: "#e33010",
    },
  },
  resetBtn: {
    backgroundColor: "black",
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "bold",
    marginLeft: "0.5em",
    marginBottom: "1rem",
    width: "180px",
    height: "40px",
    border: "2px solid black",
    borderRadius: "20px",
    backgroundColor: "#096e24",
    "&:hover": {
      backgroundColor: "white",
      color: "#096e24",
    },
  },
}));

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <div>
        <p
          style={{
            color: "red",
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
          }}
        >
          BREATHE
        </p>
      </div>
    );
  }

  return (
    <div className="timer">
      <div
        className="text"
        style={{
          color: "#b00c22",
          fontSize: "2rem",
          fontWeight: "bold",
          letterSpacing: "0.1em",
        }}
      >
        {remainingTime >= 31 ? "RECOVER" : "SPRINT!!!"}
      </div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      className={classes.background}
      alignItems="center"
    >
      <Grid item className={classes.main}>
        <Grid container direction="column">
          <h1>Circle Countdown Timer</h1>
          <Grid item className={classes.timerWrapper}>
            <CountdownCircleTimer
              className={classes.timer}
              key={loopCount}
              key={key}
              isPlaying={play}
              size={340}
              trailColor={"#070805"}
              strokeWidth={30}
              strokeLinecap
              duration={120}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              onComplete={() => [
                true,
                1100,
                setLoopCount((loopCount) => loopCount + 1),
              ]}
            >
              {renderTime}
            </CountdownCircleTimer>
          </Grid>
          <Grid item>
            <h1>Loop Count: {loopCount}</h1>
          </Grid>
          <Grid item>
            <Typography>
              <p className={classes.recoverText}>RECOVER at 120 Seconds</p>
            </Typography>
            <Typography>
              <p className={classes.goText}>SPRINT at 30 Seconds</p>
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className={classes.startBtn}
              onClick={() => setPlay((play) => !play)}
            >
              Start/Stop Timer
            </Button>

            <Button
              variant="outlined"
              className={classes.resetBtn}
              onClick={() => setKey((prevKey) => prevKey + 1)}
            >
              Reset Timer
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
