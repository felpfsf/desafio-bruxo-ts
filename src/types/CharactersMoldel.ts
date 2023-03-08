export interface CharacterProps {
  actor: string;
  alive: boolean;
  ancestry: string;
  dateOfBirth: string;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  id: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: { wood: string; core: string; length: number };
  wizard: boolean;
  yearOfBirth: number;
}
