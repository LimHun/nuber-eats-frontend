import React from "react";

interface IButtonProps {
	canClick: boolean;
	loading: boolean;
	actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
	canClick,
	loading,
	actionText,
}) => (
	<button
		className={` mt-3 text-lg font-medium focus:outline-none text-white py-3 transition-colors rounded-lg ${
			canClick
				? "bg-lime-400 hover:bg-lime-500"
				: "bg-purple-300 pointer-events-none"
		}`}
	>
		{loading ? "Loading..." : actionText}
	</button>
);
