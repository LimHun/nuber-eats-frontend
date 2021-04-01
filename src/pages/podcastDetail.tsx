import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
	getAllPodcasts,
	getAllPodcasts_getAllPodcasts,
} from "../__generated__/getAllPodcasts";
import backIcon from "../images/back.svg";
import moreIcon from "../images/more.svg";
import playIcon from "../images/play-button.svg";
import listIcon from "../images/list.svg";
import downloadIcon from "../images/download.svg";
import { Link } from "react-router-dom";

const PODCAST_QUERY = gql`
	query getAllPodcasts {
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

export const PodcastDetail = () => {
	const { data, loading } = useQuery<
		getAllPodcasts,
		getAllPodcasts_getAllPodcasts
	>(PODCAST_QUERY);

	return (
		<div className="w-full justify-center items-center bg-gray-800">
			<div className="w-full flex justify-between ">
				<Link className="p-3" to="/podcasts">
					<img src={backIcon} className=" ml-3 mt w-6" alt="" />
				</Link>
				<img src={moreIcon} className=" mr-3 mt w-6" alt="" />
			</div>
			<div className="flex mt-3 justify-between ml-6 mr-6">
				<div>
					<div className="text-gray-100 text-3xl font-light">
						The Jordan B. Peterson Podcast
					</div>
					<div className="text-blue-200 font-extralight ">
						Dr. Jordan B. Peterson
					</div>
				</div>
				<div className=" w-24 h-24 rounded-sm bg-gray-400"></div>
			</div>
			<div className="flex ml-6">
				<div className="p-1 mt-3 mb-4 flex border-gray-700 border rounded-full  items-center ">
					<img src={playIcon} className="mr w-6" alt="" />
					<div className="text-lg text-gray-300 pl-2 pr-2">
						99 min
					</div>
				</div>
				<img src={listIcon} className="ml-4 mt w-6" alt="" />
				<img src={downloadIcon} className=" ml-4 mt w-6" alt="" />
			</div>
			<div>
				<div className="mt-3 ml-6 mr-6 mb-8 font-light text-gray-400 ine-clamp-3 md:line-clamp-none overflow-ellipsis overflow-hidden ...">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a
					type specimen book.
				</div>
			</div>
			<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
			<div className="items-center flex justify-between">
				<div className="pt-8 pb-4 ml-6 font-light text-xl text-gray-300">
					100 Episodes
				</div>
				<img src={listIcon} className="mr-6 mt w-6" alt="" />
			</div>
			<div>
				<div>
					<div className="ml-6 mt-4 font-light text-sm text-gray-300">
						Jan 00
					</div>
					<div className="ml-6 font-light text-sx text-gray-100">
						episode title
					</div>
				</div>
				<div className="flex ml-6">
					<div className="p-1 mt-3 mb-4 flex border-gray-700 border rounded-full  items-center ">
						<img src={playIcon} className="mr w-6" alt="" />
						<div className="text-lg text-gray-300 pl-2 pr-2">
							99 min
						</div>
					</div>
					<img src={listIcon} className="ml-4 mt w-6" alt="" />
					<img src={downloadIcon} className=" ml-4 mt w-6" alt="" />
				</div>
				<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
			</div>
			<div>
				<div>
					<div className="ml-6 mt-4 font-light text-sm text-gray-300">
						Jan 00
					</div>
					<div className="ml-6 font-light text-sx text-gray-100">
						episode title
					</div>
				</div>
				<div className="flex ml-6">
					<div className="p-1 mt-3 mb-4 flex border-gray-700 border rounded-full  items-center ">
						<img src={playIcon} className="mr w-6" alt="" />
						<div className="text-lg text-gray-300 pl-2 pr-2">
							99 min
						</div>
					</div>
					<img src={listIcon} className="ml-4 mt w-6" alt="" />
					<img src={downloadIcon} className=" ml-4 mt w-6" alt="" />
				</div>
				<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
			</div>
			<div>
				<div>
					<div className="ml-6 mt-4 font-light text-sm text-gray-300">
						Jan 00
					</div>
					<div className="ml-6 font-light text-sx text-gray-100">
						episode title
					</div>
				</div>
				<div className="flex ml-6">
					<div className="p-1 mt-3 mb-4 flex border-gray-700 border rounded-full  items-center ">
						<img src={playIcon} className="mr w-6" alt="" />
						<div className="text-lg text-gray-300 pl-2 pr-2">
							99 min
						</div>
					</div>
					<img src={listIcon} className="ml-4 mt w-6" alt="" />
					<img src={downloadIcon} className=" ml-4 mt w-6" alt="" />
				</div>
				<div className="w-full py-0 bg-gray-700 border-b border-gray-500"></div>
			</div>
		</div>
	);
};
