import { createSlice } from "@reduxjs/toolkit";
const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state,action){
    state.entities.push(action.payload)
}
    // create reducer methods
  },
});

// export the action create
export const {bandAdded} = bandsSlice.actions
export default bandsSlice.reducer;
