import Head from 'next/head';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';


export default function Agency() {
  return (
    <>
      <NavBar />
      <Container sx={{ paddingTop: 2 }}>
        <Grid container>
          <Grid item xs="2">
            {/* future thing here */}
          </Grid>
          <Grid item xs="10">
            <Typography variant="h3" gutterBottom>
              Agency Page
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

