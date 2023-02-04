import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics:{}
    },
    reducers: {
        addTopic: (state,action) => {
            const id = action.payload.id;
            state.topics[id] = {
                id: id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizIds: (state,action) => {
            const {quizId,topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
})
export const selectTopics = (state) => state.topics.topics;
export const {addTopic,addQuizIds} = topicsSlice.actions;
export default topicsSlice.reducer;