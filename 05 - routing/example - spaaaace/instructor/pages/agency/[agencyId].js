import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { getAgency } from '@utils/api/agencies'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';


export default function Agency() {

  const [agencyDetails, setAgencyDetails] = useState();

  const router = useRouter();
  const { agencyId } = router.query; // destructure out any/all dynamic route params

  useEffect(
    () => {
      getAgency(agencyId).then((data) => {
        setAgencyDetails(data);
      })
    },
    [agencyId]  // effect will fire on mount/load + whenever agencyId changes
  )


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
              Agency Page for {agencyId}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

