// import {create} from "zustand";
// import { useEffect } from "react";

// const initialValue = {
//   isLogin: false,
//   userId: "",
// };

// const initialState = {
//   ...initialValue,
//   setFields: () => {},
//   setClose: () => {},
//   logout: () => {},
// };

// // authStore oluşturuluyor
// export const useStore = create((set) => ({
//   ...initialState,

//   // Kullanıcı bilgilerini güncelleme
//   setFields: (fields) =>
//     set((state) => ({
//       ...state,
//       ...fields,
//     })),

//   // Kullanıcı bilgilerini sıfırlama
//   setClose: () => set(() => ({ ...initialValue })),

//   // Kullanıcıyı çıkartma (logout işlemi)
//   logout: () => {
//     localStorage.removeItem("userId"); // localStorage'dan userId'yi kaldır
//     set({ ...initialValue }); // Store'u sıfırla
//   },
// }));

// // Kullanıcıyı localStorage'dan alıp store'a ayarlamak için custom hook
// export const useInitializeUser = () => {
//   const setFields = useStore((state) => state.setFields);

//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId"); // Kullanıcı ID'sini localStorage'dan al

//     if (storedUserId) {
//       setFields({ userId: storedUserId, isLogin: true }); // Eğer kullanıcı varsa, store'a kaydet
//     }
//   }, [setFields]);
// };
