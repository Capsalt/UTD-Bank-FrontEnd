import React, { useState } from "react";
import About from "../components/about/About";
import Retail from "../components/about/Retail";
import PageHeader from "../components/common/PageHeader";
import Search from "../components/searchBar/Search";
import { Placeholder, Container } from 'react-bootstrap';
import { getUser, login } from "../../api/user-service";

const AboutPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="SearcBar">
      <input 
      type="text" 
      placeholder="Search..." 
      onChange={event => {
        setSearchTerm(event.target.value);
      }}
        />
      {X.filter((val)=>{
        if(searchTerm == ""){
          return val
        } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).map((val, key) =>{
        return (<div> 
            <p>{val.firstName}</p>
        </div>)
      })}
    </div>
  );
};

export default AboutPage;



