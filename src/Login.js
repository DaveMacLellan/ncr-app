import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export default function Login(){
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
    })

    const auth = getAuth()
    const navigate = useNavigate();

    function handleChange(event){
        const {name, value, type} = event.target
        setUserCreds(prevCred => {
            return {
            ...prevCred,
            [name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        //alert("form value sended! " + formData);
        //history.push("/home");
        signInWithEmailAndPassword(auth, userCreds.email, userCreds.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/userParts", {state:{email: userCreds.email}})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        
    };
    console.log(userCreds)
    return(
        <div className="loginContainer">
            <h3 className="loginContainer--title">NCR Parts Tool</h3>
            <input
                type="text"
                placeholder="Enter quicklook ID email"
                value={userCreds.email}
                name="email"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Enter password"
                value={userCreds.password}
                name="password"
                onChange={handleChange}
            />
            <div className="loginButton--container">
                <button className="loginButton" onClick={handleSubmit}>Login</button>
            </div>           
        </div>
    )
}