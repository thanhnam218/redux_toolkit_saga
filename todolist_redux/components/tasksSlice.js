import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://6718b2247fc4c5ff8f4a9d1d.mockapi.io/api/v1/todolist'); 
  return await response.json();
});

// Async action để thêm nhiệm vụ mới vào API
export const addTask = createAsyncThunk('tasks/addTask', async (newTask) => {
  const response = await fetch('https://6718b2247fc4c5ff8f4a9d1d.mockapi.io/api/v1/todolist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task: newTask }),
  });
  return await response.json();
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default tasksSlice.reducer;
