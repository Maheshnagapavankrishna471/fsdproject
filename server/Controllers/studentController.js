// export const getStudentController = (req,res) =>{
//     res.json({
//         name:"mahesh",
//         age:24
//     })
// }

import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"

// export const postStudentController = (req,res) =>{
//     res.json({
//         name:"rajesh",
//         age:23
//     })
// },

//dkhgududgg

export const getStudentController = async (req, res) => {
    let students;
    try {
        students = await userModel.find()
        console.log(students)
    } catch (e) {
        console.log(err)
    }

    if (!students) {
        res.status(400).json({
            message: "No data found"
        })
    }

    res.status(200).json(students)
}

export const postStudentController = async (req, res) => {
    const { name, email, batch } = req.body
    let existingStudent;

    try {
        existingStudent = await userModel.findOne({email})
    } catch (err) {
        console.log(err)
    }

    // const hashedPassword = bcrypt.hashSync(password);

    if (existingStudent) {
        return res.status(400).json({
            message: "User is already created"
        })
    }
    const newStudent = new userModel({
        name: name,
        email: email,
        // password: hashedPassword,
        batch: batch
    })

    try {
        await newStudent.save()
    } catch (err) {
        console.log(err)
    }
    res.status(200).json({
        message: "new student created"
    })

}

export const deleteStudentController = async (req, res) => {
    const id = req.params.id
    try{
         await userModel.findByIdAndDelete({_id:id})
         res.status(200).json({
            message:"student deleted"
        })
        }
   catch(err){
    res.send("error",err)
   }  
}

export const editStudentController = async (req,res) =>{
    const id = req.params.id
    try{
        await userModel.findByIdAndUpdate(id,req.body)
        res.send("updated successfully")
    }
    catch(err){
        res.send("error",err)
    }

}

export const getEditStudentController = async (req,res) =>{
    let editstudent;
    const id = req.params.id
    try{
        editstudent = await userModel.findById(id,req.body)
        console.log(editstudent)
    } catch (e) {
        console.log(err)
    }
    if(!editstudent) {
        res.status(400).json({
            message: "No data found"
        })
    }
    res.status(200).json(editstudent)
}
