import { Box, Link, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const HomeLanding = ({ bgVideo }) => {
  // const bgVideo = ['media/home-bg.mp4', 'media/home-bg2.mp4'];
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      height="calc(100vh - 65px)"
      alignItems="center"
    >
      <Box
        overflow="hidden"
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          zIndex: -20,
        }}
        className="home-sec"
      >
        <video
          className="video"
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            minWidth: '100vw',
            minHeight: '100vh',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,

            zIndex: -20,
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </Box>
      <Box
        justifyContent="center"
        sx={{ fontWeight: 'bolder', '& > div': { fontWeight: 'bolder' } }}
      >
        <Typography
          variant="h3"
          component="div"
          color="whitesmoke"
          width="fit-content"
          sx={{ animation: 'slideTitleRight 0.5s linear' }}
        >
          Hi,
        </Typography>
        <Typography
          variant="h3"
          component="div"
          color="whitesmoke"
          width="fit-content"
          sx={{ animation: 'slideTitleRight 1s linear' }}
        >
          I'm{' '}
          <Typography
            variant="h4"
            component="span"
            sx={{ fontWeight: 'bolder' }}
          >
            Mohamed Helmy
          </Typography>
        </Typography>
        <Typography variant="h5" component="div" color="#424242" ml={2}>
          Full Stack Developer
        </Typography>
        <Stack direction="row" spacing={1} ml={4} mt={2}>
          <Link href="mailto:mo.helmy.dev@gmail.com">
            <MailIcon
              sx={{
                color: '#424242',
                '&:hover': { color: '#2196f3' },
                fontSize: '3rem',
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/mohamed-helmy-dev/">
            <LinkedInIcon
              fontSize="large"
              sx={{
                color: '#424242',
                '&:hover': { color: '#2196f3' },
                fontSize: '3rem',
              }}
            />
          </Link>
          <Link href="https://github.com/Mo-Helmy">
            <GitHubIcon
              fontSize="large"
              sx={{
                color: '#424242',
                '&:hover': { color: '#2196f3' },
                fontSize: '3rem',
              }}
            />
          </Link>
        </Stack>
      </Box>
      <Box
        display={{ xs: 'none', md: 'block' }}
        sx={{ animation: 'bounceImage 4s linear infinite alternate' }}
      >
        <Image src="/media/home-img.png" alt="" width={400} height={400} />
      </Box>
    </Stack>
  );
};

export default HomeLanding;
