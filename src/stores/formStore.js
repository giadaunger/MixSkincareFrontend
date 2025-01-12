import { create } from "zustand";

const useFormStore = create((set) => ({
  formData: {
    skinType: "",
    skinSensitivity: "",
    skinConcerns: [],
    age: "",
    routineLength: "",
    experienceLevel: ""
  },

  updateFormField: (field, value) => 
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value
      }
    })),

  resetForm: () => 
    set({
      formData: {
        skinType: "",
        skinSensitivity: "",
        skinConcerns: [],
        age: "",
        routineLength: "",
        experienceLevel: ""
      }
    }),

  errorMsg: "",
  setErrorMsg: (value) => set({ errorMsg: value }),
}));

export default useFormStore;