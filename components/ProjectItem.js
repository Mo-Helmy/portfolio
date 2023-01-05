import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
  CardActions,
  IconButton,
  Stack,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from 'react';

const ProjectItem = ({ project }) => {
  return (
    <Card
      sx={{
        '&:hover': {
          transform: 'scale(1.025)',
        },
        transition: 'all 300ms ease-in-out',
        flex: 1,
        minWidth: '300px',
      }}
    >
      <CardContent style={{ md: { minHeight: '172px' } }}>
        <CardHeader
          title={project.title}
          component="h5"
          sx={{ fontWeight: 'bold' }}
        />
        <Typography width="fit-content">Tech used: </Typography>
        <Stack direction="row" spacing={0.5} flexWrap="wrap" rowGap={0.5}>
          {project.tech.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              variant="filled"
              size="small"
              sx={{ bgcolor: '#212121', color: 'white' }}
            />
          ))}
        </Stack>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginY: 'auto',
        }}
      >
        <IconButton onClick={() => router.push(project.githubUrl)}>
          <GitHubIcon
            fontSize="large"
            sx={{ '&:hover': { color: '#1976d2' } }}
          />
        </IconButton>
        <IconButton onClick={() => router.push(project.githubUrl)}>
          <VisibilityIcon
            fontSize="large"
            sx={{ '&:hover': { color: '#1976d2' } }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
