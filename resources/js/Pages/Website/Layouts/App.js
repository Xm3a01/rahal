import React from "react";
import Header from "@/Components/Website/Header";

const App = ({children}) => {
  return (
    <>
       <Header />
       <main id="content">
         {children}
       </main>
    </>
  )
}

export default App;