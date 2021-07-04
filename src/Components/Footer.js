import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin:'10%',
          width: '50%',
          
        },
      },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{ border: '2px solid black', height: '300px', display: 'flex' }}>
            <div style={{ border: '2px solid black', width: '50%' }}>

            </div>
            <div style={{ border: '2px solid black', width: '50%' }}>
                <form className={classes.root} >
                    <TextField variant="outlined" placeholder="type here..." size="medium" multiline="bool">
                    </TextField>
                </form>

            </div>
        </div>
    )
}


export default Footer;