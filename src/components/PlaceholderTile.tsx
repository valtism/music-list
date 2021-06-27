import React from "react";
import { ReactComponent as ArrowsMoveIcon } from "../images/arrows-move.svg";

export default function PlaceholderTile() {
  return (
    <div className="group flex flex-1 p-2 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 flex items-center justify-center rounded-lg border-2 border-dashed border-purple-600/50 group-hover:border-purple-600/90 dark:border-purple-400/60 dark:group-hover:border-purple-400/90">
        <ArrowsMoveIcon className="h-20 w-20 fill-current text-purple-200 text-opacity-20 group-hover:text-opacity-50" />
      </div>
    </div>
  );
}
