import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { LayoutState, layoutReducer } from './layout';

import videosSaga from './videos/sagas';
import { videosReducer } from './videos/reducer';
import { VideosState } from './videos/types';
import teamsSaga from './teams/sagas';
import { TeamsState } from './teams/types';
import { teamsReducer } from './teams/reducer';
import postsSaga from './posts/sagas';
import { postsReducer } from './posts/reducer';
import { PostsState } from './posts/types';

// The top-level state object
export interface ApplicationState {
  layout: LayoutState;
  videos: VideosState;
  posts: PostsState;
  teams: TeamsState;
  router: RouterState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    videos: videosReducer,
    posts: postsReducer,
    teams: teamsReducer,
    router: connectRouter(history)
  });

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(videosSaga), fork(postsSaga), fork(teamsSaga)]);
}
