import GitHub from '@mui/icons-material/GitHub';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Stack bgcolor="#a2a1a6" width="100vw" height="20vh">
      <Container>
        <Stack direction="row" p={2} alignItems="center" spacing={1}>
          <Typography style={{ color: '#0952a4', fontWeight: 'bold' }}>
            {' '}
            ©{' '}
          </Typography>
          <Typography color="#212121" variant="body2">
            {new Date().getFullYear()}{' '}
            <span style={{ fontWeight: 'bold' }}>Mohamed Helmy</span>, Open
            Source
          </Typography>
          <Box>
            <Link href="https://github.com/Mo-Helmy/portfolio">
              <GitHub
                fontSize="medium"
                sx={{ color: '#212121', '&:hover': { color: '#1976d2' } }}
              />
            </Link>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
