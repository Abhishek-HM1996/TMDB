import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { validateEmail, validatePassword } from '../../utils';
import { useNavigate } from "react-router-dom";


export default function SignIn() {

  const [errorInfo,setErroInfo]= useState({error:"",errorInfo:""})
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event?.currentTarget);
    const email =(data.get('email') as string) || '';
    const pwd = (data?.get('password')as string) || '';
     if(!validateEmail(email)) {
        setErroInfo({error:"email",errorInfo:"Please enter a valid email"})
     }
     else if(!validatePassword(pwd)) {
        setErroInfo({error:"password",errorInfo:"Password should have 6 characters & should contain atleast 1 upper case,1 lower case,1 spcl char,1 numeric"})
     }
     else{
        localStorage.setItem("user_id",`${email}${pwd}`)
        navigate('/home')
     }

  };


  return (
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errorInfo?.error=="email"}
              helperText={errorInfo?.error=="email" && errorInfo?.errorInfo}
              onFocus={()=>setErroInfo({error:"",errorInfo:""})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errorInfo?.error=="password"}
              helperText={errorInfo?.error=="password" && errorInfo?.errorInfo}
              onFocus={()=>setErroInfo({error:"",errorInfo:""})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
  );
}