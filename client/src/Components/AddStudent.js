import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
    const navigate =  useNavigate()
    const [student,setStudent] = useState({
        name:'',
        email:'',
        password:'',
        batch:''
    })
    const handleChange = (e) =>{
        const obj = {...student,[e.target.name] : e.target.value}
        setStudent(obj)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:5000/students', student)
            .then((response) => {
              console.log(response);
                navigate('/')
                alert("student added successfully👌")
            }).catch((err)=>{
                console.log("axios erro",err)
            })
        // console.log(student)
    }
    return (
        <div>
            <h1>Add Student Details</h1>

            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" name="name" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"  name="email" onChange={handleChange} className="form-control" required/>
                </div>
                {/* <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" onChange={handleChange}  className="form-control" required/>
                </div> */}
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Batch No</label>
                    <input type="number" name="batch" onChange={handleChange}  className="form-control" required/>
                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddStudent
