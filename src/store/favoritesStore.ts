import { create } from 'zustand';

interface FavoritesStore {
  favorites: {
    tutorials: string[];
    equipment: string[];
    resorts: string[];
  };
  addFavorite: (type: 'tutorials' | 'equipment' | 'resorts', id: string) => void;
  removeFavorite: (type: 'tutorials' | 'equipment' | 'resorts', id: string) => void;
  isFavorite: (type: 'tutorials' | 'equipment' | 'resorts', id: string) => boolean;
  clearAll: () => void;
}

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: {
    tutorials: [],
    equipment: [],
    resorts: []
  },
  addFavorite: (type, id) => set((state) => ({
    favorites: {
      ...state.favorites,
      [type]: [...state.favorites[type], id]
    }
  })),
  removeFavorite: (type, id) => set((state) => ({
    favorites: {
      ...state.favorites,
      [type]: state.favorites[type].filter(itemId => itemId !== id)
    }
  })),
  isFavorite: (type, id) => get().favorites[type].includes(id),
  clearAll: () => set({
    favorites: {
      tutorials: [],
      equipment: [],
      resorts: []
    }
  })
}));