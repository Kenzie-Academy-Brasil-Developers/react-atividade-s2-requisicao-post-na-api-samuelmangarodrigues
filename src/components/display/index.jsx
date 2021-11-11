import { GiConfirmed } from "react-icons/gi";

const Display = ({ isAuthenticated }) => {
  return (
    <div>
      {isAuthenticated && (
        <div>
          <GiConfirmed color="green" />
        </div>
      )}
    </div>
  );
};
export default Display;
