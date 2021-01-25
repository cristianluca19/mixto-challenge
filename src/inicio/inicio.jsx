import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from '../imagen/logo.png';
import { useStyles } from '../styles.js'


const initialValues = {
  email: 'cristianlucatti@gmail.com',
  password: 'a'
};

export default function Inicio() {
  const classes = useStyles();

  const [values, setValues] = useState({});
  
  const redireccionar= ()=>{
    setTimeout(()=>{window.location="https://www.estudiomixto.com/"},3000);
  } 
  const handleChange = (event) => {
    event.preventDefault();
    console.log(initialValues, values)
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email === initialValues.email && values.password === initialValues.password) {
      Swal.fire({
        title: 'Bienvenido '+ initialValues.email ,
        imageUrl: Logo,
        imageWidth: 200,
        imageHeight: 200,
        icon: 'success',
        imageAlt: 'Logo',
        showConfirmButton: false,
        timer: 2500
      })
      redireccionar()
  }else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...Algo salio mal!',
      text: 'Verifique los datos e ingrese nuevamente',
      footer: '<a href="/registro">Si no tiene cuentra registrese aqui</a>'
    })
}
return;
  };

return (
  <Container component="main" maxWidth="xs">
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
      {/* autoComplete="off por si el form se quiere sin autocompletado */}
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
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
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
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
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="/registro" variant="body2">
              No tienes cuenta? Registrate
              </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
);
}