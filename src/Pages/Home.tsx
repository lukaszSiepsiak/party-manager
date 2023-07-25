import image from "../Assets/yourLogo.jpg";

const Home = () => {
  return (
    <div className="Container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Home</h1>
      <p>Description here</p>
      <img style={{ backgroundColor: "transparent" }} src={image}></img>
    </div>
  );
};

export default Home;
