import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getSsn = (ssn) => {
    return axios.get(`${API_URL}user/auth/search?ssn=${ssn}`, {
        headers: authHeader(),
      });
  
  };

const getFirstName = (firstName) => {
    return axios.get(`${API_URL}user/auth/search?firstName=${firstName}`, {
        headers: authHeader(),
      });

};

const getLastName = (lastName) => {
    return axios.get(`${API_URL}user/auth/search?lastName=${lastName}`, {
        headers: authHeader(),
      });

};

const getEmail = (email) => {
    return axios.get(`${API_URL}user/auth/search?email=${email}`, {
        headers: authHeader(),
      });

};

const getAddress = (address) => {
    return axios.get(`${API_URL}user/auth/search?address=${address}`, {
        headers: authHeader(),
      });

};

const getMobilePhoneNumber = (mobilePhoneNumber) => {
    return axios.get(`${API_URL}user/auth/search?mobilePhoneNumber=${mobilePhoneNumber}`, {
        headers: authHeader(),
      });

};




export { getSsn, getFirstName, getLastName, getEmail, getAddress, getMobilePhoneNumber};
