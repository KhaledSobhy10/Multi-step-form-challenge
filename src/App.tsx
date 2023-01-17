
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen  p-2 bg-light-blue flex items-center justify-center relative">
      <div className="sm:hidden w-full h-1/5 border absolute  top-0 bg-blue-500">step indicators top</div>
      <div className="z-10 sm:w-3/4 sm:h-3/4 h-3/4 w-10/12  bg-white rounded-lg flex p-2" >
        <div className="sm:flex hidden border sm:w-1/3 w-full h-1/6 bg-red-300">step indicators</div>
        <div className="border w-3/4 flex-1 ">step content</div>
      </div>
    </div>);
}

export default App;

