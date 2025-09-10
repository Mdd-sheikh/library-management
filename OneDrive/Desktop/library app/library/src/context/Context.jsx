import { createContext, useState } from "react";



export const context = createContext(null)




const Context_providor = ({children}) => {

     
   const [profile,setProfile] = useState("true")
 const  contextvalue ={
     profile,
     setProfile
  }

    return <context.Provider value={{profile,setProfile}}>
        {children}
    </context.Provider>
}
export default Context_providor;