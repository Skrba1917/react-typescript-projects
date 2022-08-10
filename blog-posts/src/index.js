import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import profile1 from "./image/pic-1.png";
import profile2 from "./image/pic-2.png";
import profile3 from "./image/pic-3.png";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 5:00PM"
          commentText="It is amazing!"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Jack"
          date="Today at 6:00PM"
          commentText="Great job!"
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Anna"
          date="Today at 7:00PM"
          commentText="You are the best!"
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
