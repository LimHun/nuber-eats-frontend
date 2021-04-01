import { CANCELLED } from "node:dns";
import React from "react";
import { formatDiagnosticsWithColorAndContext } from "typescript";

 interface IButtonProps {
   canClick: boolean;
   loading: boolean;
   actionText: string;
 }

 export const Button: React.FC<IButtonProps> = ({ canClick, loading, actionText }) => (
    <button 
        className={`text-lg font-medium focus:outline-none text-white py-4 transition-colors ${
            canClick 
            ? "bg-lime-400 hover:bg-lime-500"
            : "bg-gray-300 pointer-events-none"
        }`}
    >
        {loading ? "Loading..." : actionText}
    </button>
 );