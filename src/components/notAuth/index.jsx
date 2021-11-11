import { VscError } from "react-icons/vsc";

const NotAuth = ({ notAthenticated }) => {
  return (
    <div>
      {notAthenticated && (
        <div>
          <VscError color="red" />
        </div>
      )}
    </div>
  );
};
export default NotAuth;
