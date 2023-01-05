import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactForm from './ContactForm';
import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();
  return (
    <Stack spacing={2} py={4}>
      <Typography
        variant="h3"
        fontWeight="bolder"
        color="whitesmoke"
        textAlign="center"
      >
        Contact Me
      </Typography>
      <Stack direction={{ md: 'row' }}>
        <Box flex={1} py={4}>
          <Typography variant="h4" color="whitesmoke">
            Let's connect
          </Typography>
          <Typography color="whitesmoke" pb={4}>
            Have cool idea for new project? want to build a website? you have a
            question? don't hesitate to contact me.
          </Typography>
          <Stack>
            <Button
              startIcon={
                <MailIcon color="primary" style={{ fontSize: '2rem' }} />
              }
              sx={{ color: 'whitesmoke', width: 'fit-content' }}
              onClick={() => router.push('mailto:mo.helmy.dev@gmail.com')}
            >
              mo.helmy.dev@gmail.com
            </Button>
            <Button
              startIcon={
                <PhoneIcon color="primary" style={{ fontSize: '2rem' }} />
              }
              sx={{ color: 'whitesmoke', width: 'fit-content' }}
            >
              +20 106 6629 7501
            </Button>
          </Stack>
        </Box>

        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default Contact;
