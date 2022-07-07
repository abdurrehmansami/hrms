import * as React from 'react';
import { useState } from 'react';
import logo from '../../assets/images/logo.png'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { Cookies, useCookies } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate  } from 'react-router-dom';

const theme = createTheme();

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#82ac20',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#c8e77e',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#c8e77e',
    },
    '&:hover fieldset': {
      borderColor: '#638118',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#c8e77e',
    },
  },
});



export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['']);

  const navigation = useNavigate();

  const axios = require('axios').default;

  // axios.get('http://hrms-codup.herokuapp.com').then(response => {
  //   console.log(response);
  // })

  const loginHandler = () => {
    axios.post('http://192.168.4.200:3000/developer/login', {
      email: email,
      password: password
    }).then(response => {
      if (response.status === 200) {
        setCookie("token", response.data.token)
        console.log(response);
        navigation("/dashboard");
        alert("User Login Successful!");

      }
    }).catch(error => {
          alert("Error!");
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            border: '1px solid #a6d728',
            boxShadow: '0 1px 6px 1px #92C224'
          }}
        >

          <img height={50} width={150} src={logo} alt="<Codup />" />

          <Avatar style={{ backgroundColor: '#92C224' }} sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CssTextField
              onChange={e => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <CssTextField
              onChange={e => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox
                value="remember"
                style={{ color: '#92C224' }} />}

              label="Remember me"
              style={{ color: '#92C224' }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: '#92C224' }}
              onClick={loginHandler}
            >
              Sign In
            </Button>
            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: '#92C224' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" style={{ color: '#92C224' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}