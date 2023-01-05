import { Stack, Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <Stack spacing={2} py={4}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bolder' }}
        gutterBottom
        color="whitesmoke"
        textAlign="center"
      >
        About Me
      </Typography>
      <Typography color="whitesmoke">
        I’m a Frontend Developer based in Marrakech, Who likes to provide
        solutions for people's projects and businesses which it is a challenge
        that I enjoy overcoming.
      </Typography>
      <Typography color="whitesmoke">
        I am a passionate person who pursues his dreams, who works hard and who
        is results oriented. As a matter of fact, I constantly work on improving
        myself seeking to achieve the best version of myself.
      </Typography>
      <Typography color="whitesmoke">
        I build websites using HTML, CSS, JavaScript, React, Node and a other
        frameworks and libraries. I spend most days learning and building up,
        either start it from scratch or adding some customized features and
        functionality for outdated websites to make them shine again.
      </Typography>
    </Stack>
  );
};

export default About;
