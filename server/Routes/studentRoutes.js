import { Router } from "express";
import { deleteStudentController, editStudentController, getEditStudentController, getStudentController, postStudentController } from "../Controllers/studentController.js";


const route = Router()


route.get('/students',getStudentController)

route.post('/students',postStudentController)

// route.post('/addstudent',postStudentController)

route.delete('/students/:id',deleteStudentController)

route.put('/students/:id',editStudentController)

route.get('/students/:id',getEditStudentController)



// route.delete('/students/:email',deleteStudentController)

export default route