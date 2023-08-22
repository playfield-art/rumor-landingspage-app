import { useCallback, useEffect, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useAirtable } from '../hooks/useAirtable';

export interface SubscribeTranslations {
  buttonText: string;
  submittedText: string;
  exampleEmailText: string;
}

export interface SubscribeProps {
  subscribeTranslations: SubscribeTranslations;
}

export const Subscribe = ({ subscribeTranslations }: SubscribeProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addEmail } = useAirtable();
  const [ currentSubscribeTranslations, setCurrentSubscribeTranslations ] = useState(subscribeTranslations);

  useEffect(() => {
    setCurrentSubscribeTranslations(subscribeTranslations);
  }, [subscribeTranslations]);

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
          <Typography variant='h4' align='center'>{currentSubscribeTranslations.submittedText}</Typography>
        </Grid>
      }
      {!submitted &&
        <>
          <Grid item xs={12} sm={8}>
            <TextField sx={{ width: "100%"}} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={currentSubscribeTranslations.exampleEmailText} InputLabelProps={{shrink: false}} id="outlined-basic" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button onClick={() => {
              if(!emailIsValid()) {
                alert('Please enter a valid email address')
              } else {
                addEmail(email).then(() => { setSubmitted(true); });
              }
            }} sx={{ width: "100%"}}>{currentSubscribeTranslations.buttonText}</Button>
          </Grid>
        </>
      }
    </Grid>
  )
}