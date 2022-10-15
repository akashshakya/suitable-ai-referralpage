import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import man from "../assets/man.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


// Progress Stepper Bar
// Line connector
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 15,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "#0ed746",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "#0ed746",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "grey",
    borderRadius: 1,
  },
}));

// Step icon
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#fff",
  zIndex: 1,
  color: "#fff",
  width: 20,
  height: 20,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  border: "5px solid grey",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    width: 50,
    height: 50,
    marginTop: "-8px",
    background: "#0ed746",
    backgroundImage: `url(${man})`,
    border: "none",
  }),
  ...(ownerState.completed && {
    background: "#0ed746",
    border: "5px solid #0ed746",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {props.completed && <Check style={{ width: "14", height: "14" }} />}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Referred", "Interviewed", "Hired", "Joined", "Reward\n($2000)"];

export default function CandidateProgress(props) {

  const [screenWidth, setScreenWith] = React.useState(window.innerWidth);

  const updateMedia = () => {
    setScreenWith(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  console.log(window.innerWidth)
  return (
    <div  className="cardBox">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3} lg={3}>
            <div>
              <img
                src={man}
                className="man"
                alt="candidate pic"
                style={{ marginTop: "25px" }}
              />
              <div className="name">
                <p style={{ fontSize: "18px", fontWeight: 600 }}>
                  Anmol Mahajan
                </p>
                <p
                  style={{ color: "rgba(50, 50, 50, 0.58)", fontSize: "16px", fontWeight: 600}}
                >
                  Sr.Engineer
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9} lg={9}>
            <div style={{ marginTop: "30px" }}>
              <Stack spacing={2}>
                <Stepper
                  alternativeLabel
                  activeStep={props.stepNo}
                  connector={<ColorlibConnector />}
                >
                  {steps.map((label, index) => (
                    <Step sx={{ width: "100%" }} key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon} key={index}>
                        <div style={{fontWeight:'bold', color:'black'}}>

                        {screenWidth <= 1024 ? label : ''}
                        </div>
                        {/* {console.log(screenWidth)} */}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {/* <span className="reward">
                  $2000
                </span> */}
              </Stack>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
