import React from "react";

const commentData = [
  {
    name: "Faizan",
    text: "Lorem ipsum dolor, sit amet consectetur",
    replies: [],
  },
  {
    name: "Faizan",
    text: "Lorem ipsum dolor, sit amet consectetur",
    replies: [
      {
        name: "Faizan",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies: [],
      },
      {
        name: "Faizan",
        text: "Lorem ipsum dolor, sit amet consectetur",
        replies: [],
      },
    ],
  },
  {
    name: "Faizan",
    text: "Lorem ipsum dolor, sit amet consectetur",
    replies: [],
  },
  {
    name: "Faizan",
    text: "Lorem ipsum dolor, sit amet consectetur",
    replies: [],
  },
  {
    name: "Faizan",
    text: "Lorem ipsum dolor, sit amet consectetur",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="shadow-sm bg-gray-100 px-2 my-2">
      <p className="font-semibold">{name}</p>
      <p>{text}</p>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentConatiner = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold">Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentConatiner;
