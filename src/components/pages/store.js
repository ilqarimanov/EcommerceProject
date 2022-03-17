import { configureStore } from "@reduxjs/toolkit";

import coursesReducer from "./courseSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
