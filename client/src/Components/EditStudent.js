import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditStudent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    batch: ''
  })
  const Api = async () => {
    await axios.get(`http://localhost:5000/students/${id}`)
      .then((response) => {
        console.log(response.data);
        const values = response.data
        setStudent(values)
      }).catch((err) => {
        console.log("inside err", err)
      })
  }
  useEffect(() => {
    Api()
  }, [])
  const handleChange = (e) => {
    const obj = { ...student, [e.target.name]: e.target.value }
    setStudent(obj)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/students/${id}`, student)
    navigate('/')

  }
  return (
    <div>
      <h1>Edit Student Details</h1>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" name="name" onChange={handleChange} className="form-control" required value={student.name} />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" onChange={handleChange} className="form-control" required value={student.email} />
        </div>
        {/* <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" onChange={handleChange} className="form-control" required value={student.password} />
        </div> */}
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Batch No</label>
          <input type="number" name="batch" onChange={handleChange} className="form-control" required value={student.batch} />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default EditStudent
