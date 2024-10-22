import profilePic from "./assets/cat.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card--image" src={profilePic} alt="profile picture" />
      <h2 className="card--title">Bro Code</h2>
      <p className="card--text"> i make Youtube video and play video games</p>
    </div>
  );
}

export default Card;
