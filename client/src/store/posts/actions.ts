import { action } from 'typesafe-actions';
import { PostsActionTypes, Post } from './types';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchRequest = (filter: string) => action(PostsActionTypes.FETCH_REQUEST, filter);

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Post[]) => action(PostsActionTypes.FETCH_SUCCESS, data);
export const fetchError = (message: string) => action(PostsActionTypes.FETCH_ERROR, message);
