import { normalize, Schema, arrayOf } from 'normalizr';

const track = new Schema('tracks');
const user = new Schema('users');
const comment = new Schema('comments');

track.define({
  user
});

comment.define({
  user
});

export const trackSchema = track;
export const userSchema = user;
export const commentSchema = comment;
