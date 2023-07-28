import "../Style/user.css";

function User() {
  return (
    <>
      <section className="user">
        <div className="information">
            <img
              className="user-img"
              src="https://github.com/RonyPadilla/My-Gallery/blob/main/src/Img/profilePhoto.png?raw=true"
              alt="User-Img"
            />

          <h2>Rodney Cotton</h2>
          <p>Helsinki, Finland</p>
        </div>
        <div className="container-data">
            <div className="user-information">
                <h3 className="h3-information">100</h3>
                <p className="p-information">Posts</p>
            </div>
            <div className="user-information">
                <h3 className="h3-information">2,242</h3>
                <p className="p-information">Follower</p>
            </div>
            <div className="user-information">
                <h3 className="h3-information">1,432</h3>
                <p className="p-information">Following</p>
            </div>
        </div>
      </section>
    </>
  );
}
export default User;
