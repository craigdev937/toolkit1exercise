import React from "react";
import { useSelector } from "react-redux";

export const UserAuthor = ({ userId }) => {
    const users = useSelector((state) => state.users);
    const author = users.find((user) => user.id === userId);

    return (
        <React.Fragment>
            <span>
                by {author ? author.name : "Unknown author"}
            </span>
        </React.Fragment>
    );
};


