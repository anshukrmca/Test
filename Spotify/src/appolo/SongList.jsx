// SongList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../queries';

const SongList = ({ songType }) => {
  const { loading, error, data } = useQuery(GET_SONGS, {
    variables: { songType },
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.getSongs.map((song) => (
        <li key={song.id}>
          <img src={song.photoUrl} alt={song.title} />
          <p>{song.title}</p>
          <p>{song.artist}</p>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
