import "./AddPart.css"
import db from "./firebase"
import { collection, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useLocation} from 'react-router-dom'
import nextId from "react-id-generator";

export default function AddPart() {
  const location = useLocation();
  const email = location.state.email

  const [parts, setParts] = useState([{
    email: "",
    quickLook: "",
    id: "",
    parts: []
  }]);

  const [newPart, setNewPart] = useState({
    id: "",
    globalReturn: "", 
    partNum: "",
    returnTask: "",
    taskNum: "",
    waybill: "",
    date: ""
  })

  const partsRef = collection(db, 'users');    
  useEffect(() => {
      const getParts = async () => {
          const data = await getDocs(partsRef)
          setParts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
      getParts();
  }, [])

    const updateParts = async (e) => {
      e.preventDefault();
      for(let i = 0; i < parts.length; i++){
        if(parts[i].email === email.toLowerCase()){
          const userDoc = doc(db, "users", parts[i].id)
          const newParts = { parts: arrayUnion(newPart) }
          await updateDoc(userDoc, newParts)
        }
      }      
    }

    function handleChange(event){
      const {name, value, type} = event.target
      setNewPart(prevPart => {
        return {
          ...prevPart,
          [name]: value,
          id: nextId("partID-")
        }
      })
    }

    return (
      <div className="form--container">
        <form>
          <h2 className="form--title">NCR Add Part</h2>
          <input 
            type="text"
            placeholder="Part Number"
            value={newPart.partNum}
            name="partNum"
            onChange={handleChange}
          />
          <input 
            type="text"
            placeholder="Original Task Number  / 'Excess'"
            value={newPart.taskNum}
            name="taskNum"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Task Number part attached to.  / 'Excess'"
            value={newPart.returnTask}
            name="returnTask"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Waybill Number"
            value={newPart.waybill}
            name="waybill"
            onChange={handleChange}
          />
          <input 
            type="text"
            placeholder="Global Return"
            value={newPart.globalReturn}
            name="globalReturn"
            onChange={handleChange}
          />
          <label>Date</label>
          <input 
            type="date"
            placeholder=""
            value={newPart.date}
            name="date"
            onChange={handleChange}
          />
          
          <div className="button--container">
            <button className="form--button__submit" onClick={updateParts}>Add Part</button>
          </div>          
        </form>
      </div>
    )
}