import * as React from 'react';
import { Item } from '../models/character.model';

type Props = {
  comics: Item[];
};

export default function MapComic(props: Props) {
  const { comics } = props;

  return (
    <div>
      {comics.map((comic, index) => (
        <li key={index}> {comic.name} </li>
      ))}
    </div>
  );
}
