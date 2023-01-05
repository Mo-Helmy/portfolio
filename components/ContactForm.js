import { Button, FormHelperText, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState({ clicked: false, value: '' });
  const [email, setEmail] = useState({ clicked: false, value: '' });
  const [subject, setSubject] = useState({ clicked: false, value: '' });
  const [messgae, setMessage] = useState({ clicked: false, value: '' });

  const isNameValid = !name.clicked || name.value.trim().length >= 5;
  const isEmailVaild =
    !email.clicked ||
    (email.value.trim().length >= 5 && email.value.includes('@'));
  const isSubjectValid = !subject.clicked || subject.value.trim().length >= 5;
  const isMessageValid = !messgae.clicked || messgae.value.trim().length >= 10;

  return (
    <Stack spacing={2} flex={1.5}>
      <FormHelperText></FormHelperText>
      <Stack direction={{ sm: 'row' }} spacing={2} rowGap={{ xs: 2 }}>
        <TextField
          label="Name"
          type="text"
          variant="filled"
          style={{
            color: 'whitesmoke',
            backgroundColor: 'whitesmoke',
            borderRadius: '8px',
          }}
          fullWidth
          required
          onChange={(e) =>
            setName((prev) => ({ ...prev, value: e.target.value }))
          }
          onBlur={() => setName((prev) => ({ ...prev, clicked: true }))}
          error={!isNameValid}
          helperText={
            isNameValid
              ? 'Required'
              : 'Name Should be at least 5 character long.'
          }
        />
        <TextField
          label="Email"
          type="email"
          variant="filled"
          style={{
            color: 'whitesmoke',
            backgroundColor: 'whitesmoke',
            borderRadius: '8px',
          }}
          fullWidth
          required
          onChange={(e) =>
            setEmail((prev) => ({ ...prev, value: e.target.value }))
          }
          onBlur={() => setEmail((prev) => ({ ...prev, clicked: true }))}
          error={!isEmailVaild}
          helperText={
            isEmailVaild
              ? 'Required'
              : 'Email Should be at least 5 character long and includes @.'
          }
        />
      </Stack>
      <TextField
        label="Subject"
        type="text"
        variant="filled"
        style={{
          color: 'whitesmoke',
          backgroundColor: 'whitesmoke',
          borderRadius: '8px',
        }}
        fullWidth
        required
        onChange={(e) =>
          setSubject((prev) => ({ ...prev, value: e.target.value }))
        }
        onBlur={() => setSubject((prev) => ({ ...prev, clicked: true }))}
        error={!isSubjectValid}
        helperText={
          isSubjectValid
            ? 'Required'
            : 'Subject Should be at least 5 character long.'
        }
      />
      <TextField
        label="Message"
        type="text"
        multiline
        rows={4}
        variant="filled"
        style={{
          color: 'whitesmoke',
          backgroundColor: 'whitesmoke',
          borderRadius: '8px',
        }}
        fullWidth
        required
        onChange={(e) =>
          setMessage((prev) => ({ ...prev, value: e.target.value }))
        }
        onBlur={() => setMessage((prev) => ({ ...prev, clicked: true }))}
        error={!isMessageValid}
        helperText={
          isMessageValid
            ? 'Required'
            : 'Message Should be at least 10 character long.'
        }
      />
      <Button
        variant="contained"
        size="large"
        style={{
          borderRadius: 9999,
          width: 'fit-content',
          paddingInline: '32px',
          marginLeft: 'auto',
        }}
        sx={{
          '&.Mui-disabled': {
            backgroundColor: '#1976d2',
            opacity: 0.3,
            color: 'white',
          },
        }}
        endIcon={<SendIcon />}
        disabled={
          !(isNameValid && isEmailVaild && isMessageValid && isSubjectValid) ||
          !(name.clicked && email.clicked && subject.clicked && messgae.clicked)
        }
      >
        Send
      </Button>
    </Stack>
  );
};

export default ContactForm;
