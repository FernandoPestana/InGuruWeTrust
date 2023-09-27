import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  country: "",
  name: "",
  lastname: "",
  adress: "",
  city: "",
  state: "",
  phone: "",
  zipcode: "",
  reference: "",
  id: "", 
};

const dataSlice = createSlice({
  name: 'data',
  initialState, 
  reducers: {
    setDataGlobal: (state, action) => {
      return { ...state, ...action.payload };
    },
    saveDataToLocalStorage: (state) => {
      // Guardar los datos en el almacenamiento local
      const formData = { ...state };
      const formDataJSON = JSON.stringify(formData);
      localStorage.setItem('formData', formDataJSON);
    }
  }
});

export const { setDataGlobal, saveDataToLocalStorage } = dataSlice.actions;
export default dataSlice.reducer;
