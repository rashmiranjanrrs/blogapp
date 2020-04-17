import React from "react";

import Comment from "./Comment/Comment";
import Aux from "../../hoc/_Aux/_Aux";

const comments = props => {
    return props.commentsList.map(comment => (
        <Aux key={comment.published_on}>
            <Comment
                name={comment.name}
                website={comment.website}
                body={comment.body}
                publishedOn={comment.published_on}
            />
        </Aux>
    ));
};

export default comments;
