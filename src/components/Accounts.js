import Account from "./Account";
const Accounts = (props) => {
  return (
    <>
      {props.data.map((group, index) => {
        return group.map((compte, i) => {
          //   return <Account name={compte.name} />;
          return <Account data={compte} />;
        });
      })}
    </>
  );
};

export default Accounts;
