import axios from "axios"
import PropTypes from 'prop-types';
import { useState } from "react"


const AddPatient = ({handleCancelBtn}) => {
    const [first_name,setFirst_Name]= useState('')
    const [last_name,setLast_name]= useState('')
    const[blood,setBlood] =useState('')


    const handleAddSubmit =async e => {
        e. preventDefault();
        console.log(first_name,last_name,blood)
        const res = await axios.post('http://127.0.0.1:8000/patient/', { first_name, last_name, blood });
        console.log(res.data)
        setFirst_Name('')
        setLast_name('')
        setBlood('')
    }

    // const handleAddClick = (e) => {
    //     e.preventDefault();
    //     console.log("Add button ", first_name, last_name, blood);
    //     handleAddSubmit(e); // Trigger form submission if necessary
    // };

    
  return (
    <>
    
    <form onSubmit={handleAddSubmit}>
        <div className="mb-3">
            <label htmlFor="first_name">First Name</label>
            <input type="text" className="form-control" id="first_name" value={first_name} onChange={e=>setFirst_Name(e.target.value)}/>
        </div>
        <div className="mb=3">
            <label htmlFor="last_name" className="form-label" >Last Name</label>

            <input type="text" className="form-control" id="last_name" value={last_name} onChange={e=> setLast_name(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="blood" className="form-label"  >Blood</label>
            <input  type="text" className="form-control" id="blood" value={blood} onChange={e=>setBlood(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary m-2" >Add</button>
        <button type="button" className="btn btn-secondary m-2" onClick={handleCancelBtn}>Cancel</button>
        
    </form>
    </>
  )
}
AddPatient.propTypes = {
    handleCancelBtn: PropTypes.func.isRequired,
};

export default AddPatient