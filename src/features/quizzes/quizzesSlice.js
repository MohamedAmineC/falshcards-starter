import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {},
  },
  reducers:{
    addQuiz: (state,action) => {
        const id = action.payload.id;
        state.quizzes[id] = action.payload
    }
  }
})

export const quizThunkActionCreator = quiz => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz))
        dispatch(addQuizIds({quizId: quiz.id,topicId: quiz.topicId}))
    }
}
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;