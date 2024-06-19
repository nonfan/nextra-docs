import React from 'react';
import { getAvailablePath } from '@/utils';

const VideoPlayer = ({ src, width, height }) => (
  <video width={width} height={height} controls>
    <source src={getAvailablePath(src)} type="video/mp4" />
  </video>
);

export default VideoPlayer;
