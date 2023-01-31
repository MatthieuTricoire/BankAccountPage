import userLogo from "../assets/img/user.png";
const User = (props) => {
  return (
    <div className="user row">
      <div className="user__name">{props.username}</div>
      <img src={userLogo} alt="" />
    </div>
  );
};
export default User;
