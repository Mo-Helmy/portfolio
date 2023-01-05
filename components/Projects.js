import { Stack, Typography } from '@mui/material';

import { useRouter } from 'next/router';
import ProjectItem from './ProjectItem';

const projectList = [
  {
    title: 'Image Processing Project',
    tech: ['Node.js', 'Express.js', 'Jasmine', 'Typescript'],
    githubUrl: 'https://github.com/Mo-Helmy/image-processing-project',
  },
  {
    title: 'Store Backend',
    tech: ['Node.js', 'Express.js', 'Postgres', 'Jasmine', 'Typescript'],
    githubUrl: 'https://github.com/Mo-Helmy/storefront-backend-project',
  },
  {
    title: 'AWS Store Backend',
    tech: ['Node.js', 'Express.js', 'Postgres', 'Jasmine', 'AWS', 'Typescript'],
    githubUrl: 'https://github.com/Mo-Helmy/aws-store-backend',
  },
];

const Projects = () => {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <Stack spacing={2} minHeight={pathName === '/projects' && '80vh'} py={4}>
      <Typography
        variant="h3"
        color="whitesmoke"
        fontWeight="bolder"
        textAlign="center"
        gutterBottom
      >
        Projects
      </Typography>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        spacing={{ md: 2 }}
        rowGap={2}
        flexWrap="wrap"
        justifyContent="center"
      >
        {projectList.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
