import "./user.css";
function User() {
  return (
    <section className="user-wrapper">
      <div className="user-img">
        <img
          src="https://github.com/hyemin12/bubble-with-gomin/blob/master/public/assets/profile.jpg?raw=true"
          alt=""
        />
      </div>
      <div className="user-name">
        <span>HYEMIN</span>
      </div>
      <button className="btn btn-more">▼</button>
    </section>
  );
}

export default User;
