import { create } from "zustand";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,
        setActiveLocation: (location = null) => set((state) => { state.activeLocation = location })
    }))
)