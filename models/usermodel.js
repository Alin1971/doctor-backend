import mongoose from "mongoose"

mongoose.connect('mongodb+srv://alin:1234@doctor-appointment.ndikh.mongodb.net/?retryWrites=true&w=majority&appName=doctor-appointment')



//--------------------Schema for User Table---------------------//
const user_table = new mongoose.Schema({
    name: String,
    pass:String
});


export default mongoose.model("user", user_table);

