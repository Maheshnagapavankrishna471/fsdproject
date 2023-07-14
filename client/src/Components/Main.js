import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayStudent from './DisplayStudent'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path = '/' element = {<DisplayStudent/>}/>
            <Route path = '/list' element = {<DisplayStudent/>}/>
            <Route path = '/addstudent' element = {<AddStudent/>}/>
            <Route path = '/editstudent/:id' element = {<EditStudent/>}/>
        </Routes>
      
    </div>
  )
}

export default Main
