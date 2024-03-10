import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs($search: String, $songType: String) {
    getSongs(search: $search, songType: $songType) {
      id
      photoUrl
      audioUrl
      duration
      title
      artist
    }
  }
`;
