import { Reducer } from 'redux';
import { PostsState, PostsActionTypes } from './types';

// Type-safe initialState!
export const initialState: PostsState = {
  data: { posts: [], total: 0 },
  errors: undefined,
  loading: false
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<PostsState> = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case PostsActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case PostsActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as postsReducer };
