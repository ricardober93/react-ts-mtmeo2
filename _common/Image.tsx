import * as React from 'react';
type Props = {
  imagen: string;
  name?: string;
  width: string;
};

export default function MapComic(props: Props): JSX.Element {
  const { imagen, width } = props;

  return <img width={width} src={imagen} alt="imagen " />;
}
