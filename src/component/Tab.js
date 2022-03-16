import { useState} from "react";
import FontA from "./FontA";
import FontB from "./FontB";


export default function Tab(props) {
    const [storedId , setStoredId] = useState(101);
    const [fontEnd, setFontEnd] = useState("fonts_a");
    const [remeber, rememberMe] = useState();


    function handlerCache() {
      
  localStorage.setItem('rememberMe', rememberMe);
  localStorage.setItem('setFontEnd', rememberMe ? setFontEnd : '');
  console.log(setFontEnd)
    }

    return(
        <div>
          <h2 className="title">Please select one font</h2>
<ul className="nav justify-content-end">
      { props.tabsArr.map((tab) => {
        return(
          <li className="nav-item" key={tab.id}>
          <a  tabIndex="0"
          // key={tab.id} 
          className={"nav-link " + (tab.id === storedId ? 'active' : '')}
          aria-current="page" 
          onClick={() => {setStoredId(tab.id); setFontEnd(tab.content_endpoint); handlerCache()}}>
            {tab.label}</a>
          </li>
        );
        })
      }
          </ul>
          {fontEnd === "fonts_a" ? <FontA fontEnd={fontEnd} fontAArr={props.fontAArr} /> : <FontB />}
          </div>
    )
        }