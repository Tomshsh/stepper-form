import { StepLabel } from "@material-ui/core"

const Stepper = ({ steps, activeStep }) => {

    return (
        <Stepper>
            {steps.map((s) => {
                <Step key={s.name}>
                    <StepLabel>{s.name}</StepLabel>
                </Step>
            })}
        </Stepper>
        
      );
}

export default Stepper;