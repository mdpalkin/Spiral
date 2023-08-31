import {configureStore} from "@reduxjs/toolkit";
import { tasksReducer } from "../features/tasksList/tasks-reducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})