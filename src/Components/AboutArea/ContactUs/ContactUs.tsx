import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography } from "@material-ui/core";
import { Clear, ContactMail, Send } from "@material-ui/icons";
import "./ContactUs.css";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">
            <Typography variant="h3" className="Headline">
                <ContactMail/>
                Contact Us
                </Typography>
            
            <TextField label="Name:" variant="outlined" className="TextBox"/>
            <TextField label="Email:" type="email" variant="outlined" className="TextBox"/>
            <TextField label="Message:" variant="outlined" className="TextBox" />

            <FormControlLabel label="Send Me Promotional Emails" control={<Checkbox/>}/>

            <ButtonGroup variant="contained" fullWidth>
            <Button  color="primary" startIcon={<Send/>}>SEND</Button>
            <Button  color="secondary" startIcon={<Clear/>}>CLEAR</Button>
            </ButtonGroup>

            
			
        </div>
    );
}

export default ContactUs;
