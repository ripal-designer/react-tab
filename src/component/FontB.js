import React, { useEffect, useState } from "react";

function BuyFont() {
    
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("http://json.ffwagency.md/fonts_b")
      .then((res) => res.json())
      .then((result) => {
        let filterData = JSON.stringify(result);

        const myObj = JSON.parse(filterData);
        //   const x = myObj["type"];

        const data = result;
        document.getElementById("type").innerHTML = myObj.type;
        document.getElementById("content").innerHTML = myObj.content;

        setData(data);
        console.log(data);
        console.log(myObj.content);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="tab-content col-md-8 justify-content-center d-flex flex-column  align-items-center">
      <h2 id="type"> </h2>
      <div id="content" className="text-center"> </div>
    </div>
  );
}

export default BuyFont;
