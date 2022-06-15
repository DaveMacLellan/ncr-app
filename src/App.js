import "./App.css";
import Login from "./Login"
import { Routes, Route } from "react-router-dom";
import UserParts from "./UserParts";
import AddPart from "./AddPart";
import { Layout } from "./Layout";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/userParts" element={<UserParts />} />
          <Route path="/addPart" element={<AddPart />} />
        </Route>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </>
     
  );
}
