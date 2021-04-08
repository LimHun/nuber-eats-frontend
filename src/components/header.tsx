import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useMe } from "../hooks/useMe";
import nuberLogo from "../images/logo.svg";
import podcastLogo from "../images/podcasts.svg";

export const Header: React.FC = () => {
	const { data } = useMe();
	return (
		<>
			{/* {!data?.me.verified && (
				<div className="bg-red-500 p-3 text-center text-base text-white">
					<span>Please verify your email.</span>
				</div>
			)} */}
			<header className="py-4 bg-gray-900">
				<div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center ">
					<Link to="/">
						<img
							src={podcastLogo}
							className="w-14"
							alt="Nuber Eats"
						/>
					</Link>
					<span className="text-xs">
						<Link to="/edit-profile">
							<FontAwesomeIcon
								icon={faUser}
								className="text-3xl"
							/>
						</Link>
						<Link to="/" className="ml-4">
							<FontAwesomeIcon
								icon={faSignOutAlt}
								className="text-3xl"
							/>
						</Link>
					</span>
				</div>
			</header>
		</>
	);
};
