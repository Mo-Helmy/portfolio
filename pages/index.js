import About from '../components/About';
import Contact from '../components/Contact';
import HomeLanding from '../components/HomeLanding';
import MySkills from '../components/MySkills';
import Projects from '../components/Projects';

export default function Home({ bgVideo }) {
  return (
    <>
      <HomeLanding bgVideo={bgVideo} />
      <MySkills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export const getStaticProps = () => {
  const bgVideos = [
    'media/home-bg.mp4',
    'media/home-bg2.mp4',
    'media/home-bg3.mp4',
    'media/home-bg4.mp4',
  ];
  const bgVideo = bgVideos[Math.floor(Math.random() * bgVideos.length)];

  return {
    props: {
      bgVideo,
    },
  };
};
