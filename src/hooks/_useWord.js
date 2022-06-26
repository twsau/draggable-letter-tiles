import create from "zustand";
export const useWord = create((set, get) => ({
  letters: [
    { id: "letter-1", value: "a" },
    { id: "letter-2", value: "c" },
    { id: "letter-3", value: "t" }
  ],
  sortLetters: (startIndex, endIndex) => {
    const result = [...get().letters];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    set({ letters: result });
  }
}));
