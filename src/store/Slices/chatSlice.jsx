import { createSlice } from '@reduxjs/toolkit';

export const playerChatSlice = createSlice({
    name: 'player',
    initialState: {
        chats: [],
        friends: []
    },
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload
        },
        addNewChat: (state, action) => {
            state.chats = [...state.chats, action.payload]
        },
        setFriendsId: (state, action) => {
            state.friends = action.payload
        },
        addnewFriendsId: (state, action) => {
            state.friends = [...state.friends, action.payload]
        },
        

    },
});

export const { setChats, setFriendsId, addNewChat,
    addnewFriendsId,
    addChatMessage } = playerChatSlice.actions;

export default playerChatSlice.reducer;