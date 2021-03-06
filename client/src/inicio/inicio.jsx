import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Logo from '../imagen/logo.png';
import { useStyles } from '../styles.js'



export default function Inicio() {
  const classes = useStyles();

  const [values, setValues] = useState({});
  const [valuePass, setValuePass] = useState({
    password: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValuePass({ ...valuePass, showPassword: !valuePass.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const redireccionar = () => {
    setTimeout(() => { window.location = "https://www.estudiomixto.com/" }, 3000);
  }
  const handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${REACT_APP_BACKEND_URL}/login`, values)
      .then(res => {
        console.log("res", res)
        if (res.status === 200) {

          Swal.fire({
            title: 'Bienvenido ' + values.email,
            imageUrl: Logo,
            imageWidth: 200,
            imageHeight: 200,
            icon: 'success',
            imageAlt: 'Logo',
            showConfirmButton: false,
            timer: 2500
          })
          redireccionar()
        }
      })

      .catch(
        Swal.fire({
          icon: 'error',
          title: 'Oops...Algo salio mal!',
          text: 'Verifique los datos e ingrese nuevamente',
          footer: '<a href="/registro">Si no tiene cuentra registrese aqui</a>'
        })
      )
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar variant="rounded"
          src={Logo}
          alt="logo"
          className={classes.large} >
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de Sesión
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                placeholder="Email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                placeholder="Password"
                type={valuePass.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid item>
            <Link href="/registro" variant="body2">
              No tienes cuenta? Registrate
              </Link>
          </Grid>
        </form>
      </div>
    </Container>
  );
}