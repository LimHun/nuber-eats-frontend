/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allPodcasts
// ====================================================

export interface allPodcasts_getAllPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  title: string;
  category: string;
  rating: number;
  createdAt: any;
}

export interface allPodcasts_getAllPodcasts {
  __typename: "GetAllPodcastsOutput";
  ok: boolean;
  error: string | null;
  podcasts: allPodcasts_getAllPodcasts_podcasts[] | null;
}

export interface allPodcasts {
  getAllPodcasts: allPodcasts_getAllPodcasts;
}
