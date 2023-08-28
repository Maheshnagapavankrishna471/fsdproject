import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const DisplayStudent = () => {

    const [students, setStudents] = useState([])

    const getstudent = () =>{
        axios.get('http://localhost:5000/students')
        .then((response) => {
            console.log(response);
            setStudents(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const deleteStudent = async (id) =>{
       await  axios.delete(`http://localhost:5000/students/${id}`)
        .then((response)=>{
            alert("deleted successfully🗑️")
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
        getstudent()
    }
    useEffect(()=>{
        getstudent()
    },[])
    return (
        <div>
            <h1>Displaying The Data Here</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SNO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        {/* <th scope="col">Password</th> */}
                        <th scope="col">Batch No</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map((student, i) => {
                            return (
                                <tr key={i}>
                                    <td class="table-primary">{i+1}</td>
                                    <td class="table-secondary">{student.name}</td>
                                    <td class="table-success">{student.email}</td>
                                    <td class="table-danger">{student.batch}</td>
                                    <td class="table-warning">
                                            <Link to={`/editstudent/${student._id}`} className="btn btn-primary">Edit</Link>
                                </td>
                                    <td class="table-info">
                                        <button onClick={() => deleteStudent(student._id)} className="btn btn-danger" bsStyle="danger" >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default DisplayStudent
