import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6515c5e609e3260018c9202f.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = axios.get('/contacts');
    return response.data
})

