import { gql } from "@apollo/client";

export const RESTAURANT_FRAGMENT = gql`
	fragment RestaurantParts on Restaurant {
		id
		name
		coverImg
		category {
			name
		}
		address
	}
`;

export const CATEGORY_FRAGMENT = gql`
	fragment CategoryParts on Category {
		id
		name
		coverImg
		slug
		restaurantCount
	}
`;

export const PODCAST_FRAGMENT = gql`
	fragment PodcastParts on Podcast {
		id
		title
		category
		thumbnailUrl
		description
		rating
	}
`;
