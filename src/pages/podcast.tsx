import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
	getAllPodcasts,
	getAllPodcasts_getAllPodcasts,
} from "../__generated__/getAllPodcasts";
import playIcon from "../images/play-button.svg";
import listIcon from "../images/list.svg";
import downloadIcon from "../images/download.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PODCAST_QUERY = gql`
	query allPodcasts {
		getAllPodcasts {
			ok
			error
			podcasts {
				id
				title
				category
				rating
				createdAt
			}
		}
	}
`;

export const Podcasts = () => {
	const [index, tabState] = useState(1);
	const { data, loading } = useQuery<
		getAllPodcasts,
		getAllPodcasts_getAllPodcasts
	>(PODCAST_QUERY);
	const onTabClick = (tabIndex: number) => {
		tabState(tabIndex);
	};

	return (
		<div>
			<Helmet>
				<title>Podcast | list</title>
			</Helmet>
			<div className="bg-gray-800 w-full flex items-center justify-center mx-auto ">
				{index === 1 ? (
					<div className="py-3 px-4 border-b-2  border-blue-300 text-center text-blue-300">
						<button
							role="alert"
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(1)}
						>
							for You
						</button>
					</div>
				) : (
					<div className="py-3 px-4 border-b-2  border-gray-800 hover:border-blue-300 text-center text-gray-400 hover:text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(1)}
						>
							for You
						</button>
					</div>
				)}
				{index === 2 ? (
					<div className="py-3 px-4 border-b-2  border-blue-300 text-center text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(2)}
						>
							News
						</button>
					</div>
				) : (
					<div className="py-3 px-4 border-b-2  border-gray-800 hover:border-blue-300 text-center text-gray-400 hover:text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(2)}
						>
							News
						</button>
					</div>
				)}
				{index === 3 ? (
					<div className="py-3 px-4 border-b-2  border-blue-300 text-center text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(3)}
						>
							Culture
						</button>
					</div>
				) : (
					<div className="py-3 px-4 border-b-2  border-gray-800 hover:border-blue-300 text-center text-gray-400 hover:text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(3)}
						>
							Culture
						</button>
					</div>
				)}
				{index === 4 ? (
					<div className="py-3 px-4 border-b-2  border-blue-300 text-center text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(4)}
						>
							Education
						</button>
					</div>
				) : (
					<div className="py-3 px-4 border-b-2  border-gray-800 hover:border-blue-300 text-center text-gray-400 hover:text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(4)}
						>
							Education
						</button>
					</div>
				)}
				{index === 5 ? (
					<div className="py-3 px-4 border-b-2  border-blue-300 text-center text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(5)}
						>
							Busines
						</button>
					</div>
				) : (
					<div className="py-3 px-4 border-b-2  border-gray-800 hover:border-blue-300 text-center text-gray-400 hover:text-blue-300">
						<button
							className="focus:outline-none focus:ring-0"
							onClick={() => onTabClick(5)}
						>
							Busines
						</button>
					</div>
				)}
			</div>
			<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
			<div>
				{data?.getAllPodcasts.podcasts?.map((podcast) => (
					<Link to={`/podcast/:${podcast.id}`}>
						<div>
							<div className="pl-6 pr-6 flex flex-col bg-gray-900 items-start justify-center mx-auto">
								<div className="flex ">
									<div
										className="mt-4 p-6 bg-gray-300 rounded-md"
										style={{
											backgroundImage: `url(${podcast.title})`,
										}}
									></div>
									<div>
										<div className="text-gray-100 pl-4 pt-4">{`${podcast.title}`}</div>

										<h6 className="text-gray-500 text-sm pl-4 ">{`${Math.floor(
											(new Date().getTime() -
												new Date(
													`${podcast.createdAt}`
												).getTime()) /
												1000 /
												60
										)} min`}</h6>
									</div>
								</div>
								<div className="text-gray-100 pt-4">
									What is Lorem Ipsum?
								</div>
								<div className="text-gray-400 ine-clamp-3 md:line-clamp-none overflow-ellipsis overflow-hidden ...">
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
								</div>
								<div className="flex">
									<div className="p-1 mt-3 mb-4 flex border-gray-700 border rounded-full  items-center ">
										<img
											src={playIcon}
											className="mr w-6"
											alt="Nuber Eats"
										/>
										<div className="text-lg text-gray-300 pl-2 pr-2">
											99 min
										</div>
									</div>
									<img
										src={listIcon}
										className="ml-4 mt w-6"
										alt="Nuber Eats"
									/>
									<img
										src={downloadIcon}
										className=" ml-4 mt w-6"
										alt="Nuber Eats"
									/>
								</div>
							</div>
							<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
