import { Router } from "express";
import { deleteStudentController, editStudentController, getStudentController, postStudentController } from "../Controllers/studentController.js";


const route = Router()


route.get('/students',getStudentController)

route.post('/students',postStudentController)

route.delete('/students/:id',deleteStudentController)

route.put('/students/:id',editStudentController)


// route.delete('/students/:email',deleteStudentController)

export default route