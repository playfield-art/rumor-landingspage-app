import { useCallback, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useAirtable } from '../hooks/useAirtable';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addEmail } = useAirtable();

  /**
   * Check if email is valid
   */
  const emailIsValid = useCallback(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }, [email])

  return (
    <Grid container spacing={2}>
      {submitted &&
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>Thanks for subscribing!</Typography>
        </Grid>
      }
      {!submitted &&
        <>
          <Grid item xs={12} sm={8}>
            <TextField sx={{ width: "100%"}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e.g. rumor@playfield.be' InputLabelProps={{shrink: false}} id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={() => {
              if(!emailIsValid()) {
                alert('Please enter a valid email address')
              } else {
                addEmail(email).then(() => { setSubmitted(true); });
              }
            }} sx={{ width: "100%"}}>Subscribe</Button>
          </Grid>
        </>
      }
    </Grid>
  )
}