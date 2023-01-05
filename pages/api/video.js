import { readFileSync } from 'fs';

const path = require('path');

export default (req, res) => {
  const videoPath = path.join(__dirname, '/media/home-bg.mp4');

  const videoContent = readFileSync(videoPath);

  res.send(videoContent);
};
