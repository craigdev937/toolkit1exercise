import React from "react";
import { useDispatch } from "react-redux";
import { PostActions } from "../global/PostSlice";

const rEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕"
};

export const RButton = () => {
    const dispatch = useDispatch();
    const rAction = () => {
        dispatch(PostActions.postAdded({
            postId: postMessage.id, reaction: rName
        }))
    };

    const EButtons = Object.entries(rEmoji)
        .map(([rName, emoji]) => {
            return (
                <button 
                    className="reButton"
                    key={rName}
                    type="button"
                    onClick={rAction}
                    >{emoji} {postMessage.reaction[rName]}
                </button>
            );
        });

    return (
        <React.Fragment>
            <main>{EButtons}</main>
        </React.Fragment>
    );
};


