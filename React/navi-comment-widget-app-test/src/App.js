import CommentWidget from "./components/CommentWidget";
import "./App.css";
import Avataar from "./components/Avataar";
const App = () => {
  return (
    <>
      <div className="header">
        <h4>Navi Comment Widget App</h4>
      </div>
      <div className="container">
        <div className="left-side">
          <div className="card">
            <div className="profile">
              <Avataar name="Tony Stark" isProfile />
              <br />
              <h5>Tony Stark</h5>
            </div>
          </div>
        </div>
        <div className="feed-container">
          <div className="card feed">
            <div className="feed-conent content-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <CommentWidget
              currentUserInfo={{ id: crypto.randomUUID(), name: "Tony Stark" }}
            />
          </div>
        </div>
        <div className="right-side">
          <div className="card">
            <h5>Navi News</h5>
            <p className="content-text ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
