import React from "react";
import "./App.css";
import axios from "axios";
import Viewer from "./components/viewer";
import InfoPanel from "./components/infopanel";
import PhotoToggler from ".components/buttons";

function App() {
  const [photo, setPhoto] = useState();
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      setPhoto(response.data);
      console.log(response.data);
    })
    .catch(err =>{
      console.log("You have an error!", err);
    });
  }, []);

  
  
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
