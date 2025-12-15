import { create } from "zustand";
import { locations } from "../constants/data";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,
        setActiveLocation: (location) => set((state) => { state.activeLocation = location }),
        resetActiveLocation: () => set((state) => {
            state.activeLocation = DEFAULT_LOCATION;
            if (location === undefined) return;
        }),
    }))
);

export default useLocationStore;