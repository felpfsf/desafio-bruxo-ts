interface OptionsProps {
  id: number;
  value: string;
  label: string;
}

export const HOUSE_OPTIONS: OptionsProps[] = [
  { id: 1, value: "", label: "Todas" },
  { id: 2, value: "Gryffindor", label: "Gryffindor" },
  { id: 3, value: "Slytherin", label: "Slytherin" },
  { id: 4, value: "Ravenclaw", label: "Ravenclaw" },
  { id: 5, value: "Hufflepuff", label: "Hufflepuff" },
];

export const ANCESTRY_OPTIONS: OptionsProps[] = [
  { id: 1, value: "", label: "Todos" },
  { id: 2, value: "pure-blood", label: "Puro-Sangue" },
  { id: 3, value: "half-blood", label: "Mestiço" },
  { id: 4, value: "muggleborn", label: "Nascido Trouxa" },
  { id: 5, value: "squib", label: "Cepa torta" },
  { id: 5, value: "muggle", label: "Trouxa" },
];
