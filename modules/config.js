import gulp from 'gulp';
import { deleteSync } from 'del'
import sharp from 'sharp'
import { tasks } from './tasks.js';

export var gulpConfig = {
  gulp: gulp,
  imports: {
    del: deleteSync,
    sharp: sharp,
  },
  tasks: tasks,
  paths: {
    source: '/src/',
    build: '/build/',
    images: '/src/images/',
    fonts: '/src/fonts/',
  }
}