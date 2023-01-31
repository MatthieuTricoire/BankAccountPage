const Account = (props) => {
  return (
    <div className="account">
      <div
        className={`account__header row container`}
        style={`background-color:${props.data.color}`}
      >
        <div className={`account__name`}>{props.data.name}</div>
        <div className="account__balance">{props.data.balance}</div>
      </div>
    </div>
  );
};

export default Account;
