import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: null,
};

// Create a server myself later
// refactor all of them in apiSlice when server is done
export const registerUser = ({ name, email, password }) => {
  console.log("register user");
};
export const loginUser = ({ email, password }) => {
  console.log("login user");
};
export const updateUser = (user) => {
  console.log("update user");
};

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

// set a test user
export const setTestUser = () => {
  addUserToLocalStorage({
    name: "test",
    email: "test@gmail.com",
    password: "test",
  });
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    getUserFromLocalStorage: (state) => {
      const result = localStorage.getItem("user");
      const user = result ? JSON.parse(result) : null;
      state.user = user;
    },
    removeUserFromLocalStorage: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
});

export const {
  toggleSidebar,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} = userSlice.actions;

export default userSlice.reducer;
