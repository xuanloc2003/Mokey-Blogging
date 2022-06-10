import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase-app/firebase-config"

const {createContext, useContext, useState, useEffect} = require("react")
const AuthContext = createContext()
function AuthProvider(props ) {
    const [userInfor,setUserInfor] = useState({})
    const value = {userInfor,setUserInfor}
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        setUserInfor(user)   
        })
    })
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}
function useAuth() {
    const context = useContext(AuthContext)
    if(typeof context === "undefined") throw new Error('useAuth must be used within AuthProvider')
    return context
}
export {AuthProvider,useAuth}