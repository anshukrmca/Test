import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs($search: String, $songType: SongType!) {
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

export const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($songId: Int!) {
    updateRecentlyPlayed(songId: $songId) {
      ok
    }
  }
`;