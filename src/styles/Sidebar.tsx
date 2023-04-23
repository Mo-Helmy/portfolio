import { AppBar, Box, Typography } from '@mui/material';
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaSkype,
  FaHome,
  FaUser,
  FaEnvelope,
  FaSuitcase,
  FaBars,
  FaWindowClose,
} from 'react-icons/fa';
import Image from 'next/image';

import logo from '../../assets/images/logo.png';
import Link from 'next/link';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: 80,
        height: '100%',
        minHeight: '100vh',
        left: 0,
        top: 0,
        bgcolor: '#181818',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        width={60}
        height={60}
        position="relative"
        sx={{ marginInline: 'auto', my: 2 }}
      >
        <Image src={logo} alt="logo" fill sizes="200px" />
      </Box>
      <Box component="nav">
        <Link href="/">
          <Box
            sx={{
              '&:hover svg': { display: 'none' },
              '&:hover p': { display: 'block' },
            }}
          >
            <FaHome
              color="#4d4d4e"
              size={24}
              style={{ marginInline: 'auto' }}
            />
            <Typography variant="body2" display="none" color="#ffd700">
              Home
            </Typography>
          </Box>
        </Link>
        <Link href="/">
          <Box
            sx={{
              '&:hover svg': { display: 'none' },
              '&:hover p': { display: 'block' },
            }}
          >
            <FaUser
              color="#4d4d4e"
              size={24}
              style={{ marginInline: 'auto' }}
            />
            <Typography variant="body2" display="none" color="#ffd700">
              About
            </Typography>
          </Box>
        </Link>
        <Link href="/">
          <Box
            sx={{
              '&:hover svg': { display: 'none' },
              '&:hover p': { display: 'block' },
            }}
          >
            <FaSuitcase
              color="#4d4d4e"
              size={24}
              style={{ marginInline: 'auto' }}
            />
            <Typography variant="body2" display="none" color="#ffd700">
              Portfolio
            </Typography>
          </Box>
        </Link>
        <Link href="/">
          <Box
            sx={{
              '&:hover svg': { display: 'none' },
              '&:hover p': { display: 'block' },
            }}
          >
            <FaEnvelope
              color="#4d4d4e"
              size={24}
              style={{ marginInline: 'auto' }}
            />
            <Typography variant="body2" display="none" color="#ffd700">
              Contact
            </Typography>
          </Box>
        </Link>
      </Box>
    </AppBar>
  );
};

export default Sidebar;
