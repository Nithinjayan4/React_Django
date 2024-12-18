import { useEffect, useState } from "react"
import { deletepatient, getpatient } from "../Services/ApiService"
import AddPatient from "./AddPatient"


const PatientList = () => {
    const [patients,setPatients] = useState([])
    const[showAddPatient,setShowAddPatient] = useState(false)
    

    useEffect(() => {
        let isMounted = true;
    
        getpatient()
            .then(res => {
                console.log("response from API", res);
                if (isMounted) {
                    setPatients(res);
                }
            })
            .catch(error => {
                console.error("Error fetching patients:", error);
            });
    
        return () => {
            isMounted = false; // Clean-up to avoid state updates after unmounting
        };
    }, []);

    const handleCancelBtn =()=>{
        setShowAddPatient(false)
        getpatient()
        .then(res=>{
            console.log("response api success",res)
            setPatients(res)
        })
    }
    const handleDeleteBtn =(id)=>{
        deletepatient(id)
        .then(()=>setPatients(patients.filter(p=>p.patient_id !==id)))
    }
    

  return (
    <div className="container">
        <h3>Patient List</h3>
        <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {patients.map(patient =>
                    <tr key={patient.patient_id}>
                        <td>{patient.first_name}</td>
                        <td>{patient.last_name}</td>
                        <td>{patient.blood}</td>
                        <td>
                            <button className="btn btn-primary m-2" onClick={()=>{}}>Edit</button>
                            <button className="btn btn-danger" onClick={()=>handleDeleteBtn(patient.patient_id)}>Delete</button>
                        </td>

                    </tr>
                )

                }
            </tbody>
        </table>
        <br />
        <button className="btn btn-success" onClick={() => setShowAddPatient(!showAddPatient)}>Add Patient</button>
        <br/>
        <br />
        {showAddPatient && <AddPatient handleCancelBtn={handleCancelBtn}/>}
    </div>
  )
}

export default PatientList