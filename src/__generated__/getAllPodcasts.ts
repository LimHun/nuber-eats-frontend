/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPodcasts
// ====================================================

export interface getAllPodcasts_getAllPodcasts_podcasts {
  __typename: "Podcast";
  id: number;
  title: string;
  category: string;
  rating: number;
  createdAt: any;
}

export interface getAllPodcasts_getAllPodcasts {
  __typename: "GetAllPodcastsOutput";
  ok: boolean;
  error: string | null;
  podcasts: getAllPodcasts_getAllPodcasts_podcasts[] | null;
}

export interface getAllPodcasts {
  getAllPodcasts: getAllPodcasts_getAllPodcasts;
}
