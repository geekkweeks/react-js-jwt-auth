import "./Home.scss";
import Logout from "../../components/Logout/Logout";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  // consume context
  const { token } = useAuth();
  console.log(useAuth());
  return (
    <div>
      Home
      <br />
      hi {token?.username}
      <br /> <Logout />
    </div>
  );
};

export default Home;
