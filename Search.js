import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup, Spinner, Placeholder } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { downloadUsers, getUsers } from "../../api/admin-user-service";


const Search2 = () => {

    const [loadingUsers, setLoadingUsers] = useState(true);
    const [downloadingUsers, setDownloadingUsers] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
  
  
      const handleDownload = () => {
          setDownloadingUsers(true);
          downloadUsers().then(resp=>{
              console.log(resp.data);
              
              setDownloadingUsers(false);
          })
      }
  
      const handleEdit = (userId) => {
          navigate(`/admin/users/${userId}`);
      }
      
  
  
    useEffect(() => {
      getUsers().then((resp) => {
        setUsers(resp.data);
        setLoadingUsers(false);
      });
    }, []);
  
    return (
      <>
      
      <ButtonGroup  className="searchbar-button" aria-label="Basic example">
          <Button variant="primary" as={Link} to="/admin/users/new">
            New User
          </Button>
        </ButtonGroup>
      
      <div className="SearchBar">
        <input
        type="text" 
        placeholder="Search..." 
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
          />
          
 <Table striped bordered hover responsive className="admin-list mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Roles</th>
              </tr>
            </thead>

        {users.filter((val)=>{
          if(searchTerm == ""){
            return ""
          } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val, key) =>{
          return (
           
            <tbody>
                  <tr key={key} onClick={()=>handleEdit(val.id)} className="cursor-hand">
                    <td>{key + 1}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.email}</td>
                    <td>{val.roles.join(" ")}</td>
                  </tr>
                
            </tbody>
          
          )
        })}
        </Table>
      </div>
      </>
    );
};

export default Search2;
