import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const MySkills = () => {
  return (
    <Stack minHeight="100vh" position="relative" py={4}>
      <Box
        className="my-skills"
        position="absolute"
        sx={{
          width: '100vw',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -20,
        }}
      >
        <Image src="/media/mySkills-bg.jpg" alt="my skills" fill={true} />
      </Box>
      <Typography
        variant="h3"
        textAlign="center"
        color="whitesmoke"
        fontWeight="bolder"
        gutterBottom
      >
        My Skills
      </Typography>
      <Typography textAlign="center" color="whitesmoke">
        Passionate about new technologies, I keep exploring stuff. Here's the
        tech stack I've worked with!
      </Typography>
      <Box>
        <Stack
          direction="row"
          spacing={0}
          width="452px"
          height="120px"
          marginX="auto"
          overflow="hidden"
          position="relative"
        >
          <Stack
            spacing={2}
            direction="row"
            // flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="-452px"
            sx={{
              animation: 'slideX 5s linear infinite',
            }}
          >
            <Avatar
              src="/media/skills/html.png"
              alt="html"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 2,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
                // animation: 'slideX 2s linear infinite alternate',
              }}
            />
            <Avatar
              src="/media/skills/css.png"
              alt="css"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                // p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/js.png"
              alt="js"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/ts.png"
              alt="ts"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            // flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="0"
            sx={{
              animation: 'slideX 5s linear infinite ',
            }}
          >
            <Avatar
              src="/media/skills/html.png"
              alt="html"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 2,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
                // animation: 'slideX 2s linear infinite alternate',
              }}
            />
            <Avatar
              src="/media/skills/css.png"
              alt="css"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                // p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/js.png"
              alt="js"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/ts.png"
              alt="ts"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Divider />
      {/* Framworks */}
      <Box>
        <Stack
          direction="row"
          spacing={0}
          width="796px"
          height="116px"
          marginX="auto"
          overflow="hidden"
          position="relative"
        >
          <Stack
            spacing={2}
            direction="row"
            // flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="-796px"
            sx={{
              animation: 'slideX 7s linear infinite reverse',
            }}
          >
            <Avatar
              src="/media/skills/react.png"
              alt="react"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/redux.png"
              alt="redux"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                // p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/next.png"
              alt="next"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/tailwind.png"
              alt="tailwind"
              // sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                py: 2.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/mui.png"
              alt="mui"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/node.png"
              alt="node"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/express.png"
              alt="express"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="0"
            sx={{
              animation: 'slideX 7s linear infinite reverse',
            }}
          >
            <Avatar
              src="/media/skills/react.png"
              alt="react"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/redux.png"
              alt="redux"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                // p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/next.png"
              alt="next"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/tailwind.png"
              alt="tailwind"
              // sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                py: 2.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/mui.png"
              alt="mui"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/node.png"
              alt="node"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/express.png"
              alt="express"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Divider />
      {/* Databases */}
      <Box>
        <Stack
          direction="row"
          spacing={0}
          width="332px"
          height="116px"
          marginX="auto"
          overflow="hidden"
          position="relative"
        >
          <Stack
            spacing={2}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="-332px"
            sx={{
              animation: 'slideX 5s linear infinite',
            }}
          >
            <Avatar
              src="/media/skills/mongodb.png"
              alt="mongodb"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/postgressql.png"
              alt="postgressql"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/mysql.png"
              alt="mysql"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            // flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="0"
            sx={{
              animation: 'slideX 5s linear infinite ',
            }}
          >
            <Avatar
              src="/media/skills/mongodb.png"
              alt="mongodb"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/postgressql.png"
              alt="postgressql"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/mysql.png"
              alt="mysql"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
        </Stack>
      </Box>
      <Divider />
      {/* Others */}
      <Box>
        <Stack
          direction="row"
          spacing={0}
          width="564px"
          height="116px"
          marginX="auto"
          overflow="hidden"
          position="relative"
        >
          <Stack
            spacing={2}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="-564px"
            sx={{
              animation: 'slideX 6s linear infinite reverse',
            }}
          >
            <Avatar
              src="/media/skills/aws.png"
              alt="aws"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                py: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/api.png"
              alt="api"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/github.png"
              alt="github"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/agile.png"
              alt="agile"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 0.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/sass.png"
              alt="sass"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            pt={2}
            maxWidth="fit-content"
            marginX="auto"
            overflow="hidden"
            position="absolute"
            left="0"
            sx={{
              animation: 'slideX 6s linear infinite reverse',
            }}
          >
            <Avatar
              src="/media/skills/aws.png"
              alt="aws"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                py: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/api.png"
              alt="api"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/github.png"
              alt="github"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/agile.png"
              alt="agile"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 0.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
            <Avatar
              src="/media/skills/sass.png"
              alt="sass"
              sizes="larg"
              sx={{
                width: '100px',
                height: '100px',
                p: 1.5,
                filter: 'drop-shadow(0 4px 4px rgba(0,0,0,.55))',
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MySkills;
