import React from "react";
import { Link } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";
import { RButton } from "./RButton";
import { UserAuthor } from "./UserAuthor";

export const Excerpt = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">
                {post.body.substring(0, 75)}...
            </p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <UserAuthor />
                <TimeAgo post={post} />
            </p>
            <RButton />
        </article>
    );
};


