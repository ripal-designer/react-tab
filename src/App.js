import Tab from "./component/Tab";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./assets/css/font.css"

function App() {
  const [tabsArr, setTabArr] = useState([]);
  const [fontAArr, setFontAArr] = useState([]);
 

  const getData = () => {
    fetch("http://json.ffwagency.md/tabs")
      .then((res) => res.json())
      .then((result) => {
        let tabsArr = result;
        setTabArr(tabsArr);
      });
    fetch("http://json.ffwagency.md/fonts_a")
      .then((resFontA) => resFontA.json())
      .then((resultFontA) => {
        let fontAArr = resultFontA.content;
        setFontAArr(fontAArr);
      });
     
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
      <div className="row">

        <div className="flex-center">
        <Tab tabsArr={tabsArr} fontAArr={fontAArr} />    
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
