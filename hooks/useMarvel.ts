import { useState, useEffect } from 'react';
import { ICharacter } from '../models/character.model';
import { useNavigate } from 'react-router-dom';

export default function useMarvel(id: string | undefined) {
  let navigate = useNavigate();
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [character, setCharacter] = useState<ICharacter[]>([]);

  const getAllChacters = () => {
    const url =
      'https://gateway.marvel.com:443/v1/public/characters?apikey=3de3aab2bd3785577125d62fd8940dfe&hash=c27df0548798891baae588f1111f2577&ts=1';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.data.results));
  };

  const getOneChacter = (id: string) => {
    const url =
      'https://gateway.marvel.com:443/v1/public/characters/' +
      id +
      '?apikey=3de3aab2bd3785577125d62fd8940dfe&hash=c27df0548798891baae588f1111f2577&ts=1';
    //implement fecth

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data.data.results);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getAllChacters();
  }, []);

  useEffect(() => {
    getOneChacter(id);
  }, [id]);

  return {
    character,
    characters,
    goBack,
  };
}
