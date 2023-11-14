import fall from "../ImageBox/fall.jpg";
import spring from "../ImageBox/spring.jpg";
import summer from "../ImageBox/summer.jpg";
import winter from "../ImageBox/winter.jpg";

function Home() {
    return (
      <div className="App">
        <h1>Welcome to my seasonal website!</h1>
        <div className="imageContainer">
          <div className="imageBox">
            <img src={fall} alt="Fall"></img>
            <p>Fall time</p>
          </div>
          <div className="imageBox">
            <img src={spring} alt="Spring"></img>
            <p>Spring time</p>
          </div>
          <div className="imageBox">
            <img src={summer} alt="Summer"></img>
            <p>Summer time</p>
          </div>
          <div className="imageBox">
            <img src={winter} alt="Winter"></img>
            <p>Winter time</p>
          </div>
        </div>
        <div className="greenContainer">
          <h2>Some of my favorite seasonal activities are:</h2>
          <ul>
            <li>Hiking in the spring wildflowers</li>
            <li>Surfing in the summer sun </li>
            <li>Building snowmen in the winter </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Home;
  
