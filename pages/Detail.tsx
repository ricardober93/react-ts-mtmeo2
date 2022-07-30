import * as React from 'react';
import { useParams } from 'react-router-dom';
import useMarvel from '../hooks/useMarvel';
import MapComic from '../_common/MapComic';

export default function Detail() {
  let params = useParams();
  const { character, goBack } = useMarvel(params.id);

  return (
    <div>
      <p onClick={goBack}> atras</p>
      <h1>detail {params.id} </h1>

      <h1>
        {character
          ? character.map((c) => (
              <div key={c.id}>
                <p> {c.name} </p>
                <p> {c.description} </p>
                <p>
                  {'COMIC: '}
                  <MapComic comics={c.comics.items} />
                </p>
                <img
                  width="100px"
                  src={c.thumbnail.path + '.' + c.thumbnail.extension}
                  alt="imagen "
                />
              </div>
            ))
          : 'NO hay datos'}
      </h1>
    </div>
  );
}
