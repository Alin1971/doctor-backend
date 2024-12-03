import mongoose from "mongoose"

mongoose.connect('mongodb+srv://alin:1234@doctor-appointment.ndikh.mongodb.net/?retryWrites=true&w=majority&appName=doctor-appointment')


const doctor_table = new mongoose.Schema({
    name: String,
    pass:String,
    doc_name:String,
    exp:String,
    about:String,
    speciality:String

});


export default mongoose.model("doctor", doctor_table);

