import { useState } from 'react';
import { ICharacters } from '../models/characters.model';

export default function useMarvel() {
  const [characters, setCharacters] = useState<ICharacters[]>([]);

  const getAllChacters = () => {
    //implement fecth
  };

  const getOneChacter = () => {
    //implement fecth
  };

  return {
    getAllChacters,
    getOneChacter,
  };
}
