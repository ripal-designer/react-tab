import { useState} from "react";



export default function FontA(props) {
  function handleClickCache(){
    const { user, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? user : '');
    
  }
    const [cardId, setCardId] = useState();
    return(
        <div className="tab-content col-md-12">
          {props.fontEnd === "fonts_a" &&
            props.fontAArr.map((fontA, index) => {
              return(
              <button 
              key={index} 
              onClick={() =>{setCardId(fontA.id); handleClickCache() } }
              className={"card-font " + (fontA.id === cardId ? 'active' : '')}>
                <div className="card-texts">
                <div className="card-display">
                  <div className="border-square">
                  <div className="color-sqaure" style={{
                    "backgroundColor":
                    fontA.color !== "" && fontA.color !== undefined
                      ?fontA.color
                      : "#111111",
                  }}>
                  <span className="abbr">{fontA.abbr}</span>
                  <span className="sr-only">{fontA["color-blind-label"]}</span>
                  </div>
                  </div>
                
                </div>
                <div className="card-details">
                  <ul className="label">
                  <li>{fontA.label}</li>
                  </ul>
                </div></div>
              </button>
              )
            })
          }
          </div>
    )
        }