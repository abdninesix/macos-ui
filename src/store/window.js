import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants/data";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,
        openWindow: (windowKey, data = null) => set((state) => { }),
        closeWindow: (windowKey, data = null) => set((state) => { }),
        focusWindow: (windowKey, data = null) => set((state) => { }),
    })),
)