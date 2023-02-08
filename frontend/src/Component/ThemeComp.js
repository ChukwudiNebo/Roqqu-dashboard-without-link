import React, { useState } from 'react'
import '../css file/themecomp.css'

const ThemeComp = () => {

const [changeBGClick, setChangeBG] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: "#1C2127", borderRadius: "10px",padding:'5px',width:'200px' }}>
        <div className="d-flex align-items-center justify-content-between">
          <div stye={{ backgroundColor: "#272B32" }}>
            <p
              // href="/"
              style={{ marginBottom: "0px" }}
              onClick={() => setChangeBG(!changeBGClick)}
              className={!changeBGClick ? "blog-switch" : "notActive"}
            >
              DARK
            </p>
          </div>
          <div>
            <p
              // href=""
              style={{ marginBottom: "0px" }}
              onClick={() => setChangeBG(!changeBGClick)}
              className={!changeBGClick ? "notActive" : "brandbarn-switch"}
            >
              LIGHT
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeComp

