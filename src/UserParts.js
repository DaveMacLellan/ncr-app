import "./UserParts.css"
import db from "./firebase"
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useLocation} from 'react-router-dom'

export default function UserParts() {
    const location = useLocation();
    const email = location.state.email

    const [parts, setParts] = useState([{
        email: "",
        quickLook: "",
        id: "",
        parts: []
    }]);

    

    const partsRef = collection(db, 'users');    
    useEffect(() => {
        const getParts = async () => {
            const data = await getDocs(partsRef)
            setParts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))            
        }        
        getParts();
    }, [])

    
    let userPartsList;
    for(let i = 0; i < parts.length; i++){
        if(parts[i].email === email){
            userPartsList = parts[0].parts.map(part => {
                return (
                    <div className="part" key={part.id}>
                        <h3>Part Number: <span>{part.partNum}</span></h3>
                        <p>Task Number: <span>{part.taskNum}</span></p>
                        <p>Waybill: <span>{part.waybill}</span></p>
                        <p>Global Return: <span>{part.globalReturn}</span></p>
                        <p>Return Task Number: <span>{part.returnTask}</span></p>
                    </div>            
                )
              })
        }        
    }
    return(
        <div className="part--container">
            {userPartsList}
        </div>
    )
}