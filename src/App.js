import React, { createContext, useState } from 'react';
import Child from './Child';
import OtherChild from './OtherChild';
import MyApp from './useContext/Usecontext';
export const GlobalInfo = createContext();


function App() {

  const [color, useColor] = useState("green");
  return (
    <GlobalInfo.Provider value={{appcolor:color}}>


      <div>
        <h1>App Component</h1>
        <Child />
        <OtherChild/>
        <MyApp/>
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
