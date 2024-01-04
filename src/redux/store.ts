import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices";
import { useDispatch, useSelector } from "react-redux";
import { api } from "./api";
import { TypedUseSelectorHook } from "react-redux";

// export const makeStore = () => {
//     return configureStore({
//         reducer: {
//             [userSlice.name]: userSlice.reducer,
//             [api.reducerPath]: api.reducer,
//         },
//         middleware: (getDefaultMiddleware) =>
//             getDefaultMiddleware().concat([api.middleware]),
//     });
// };

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
