// src/stores/isActiveLinkStore.ts

import { create } from 'zustand';

interface IsActiveLinkState {
    isActiveLink: string;
    setIsActiveLink: (link: string) => void;
}

const useIsActiveLinkStore = create<IsActiveLinkState>((set) => ({
    isActiveLink: '',
    setIsActiveLink: (link) => set({ isActiveLink: link }),
}));

export default useIsActiveLinkStore;
