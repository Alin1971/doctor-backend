import mongoose from "mongoose"

mongoose.connect('mongodb+srv://alin:1234@doctor-appointment.ndikh.mongodb.net/?retryWrites=true&w=majority&appName=doctor-appointment')


//--------------------Schema for User Table---------------------//
const appointment_table = new mongoose.Schema({
    pname: String,
    dname:String,
    age:String,
    disease:String,
    phone:String,
    pat_id:String,
    doc_id:String,
    spec:String,
    status:String,

});


export default mongoose.model("appointment", appointment_table);

