import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.e83xs.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-web`;
    try{
        await  mongoose.connect(URL, );
        console.log('Database Connected Successfully');
        console.log('Bring me thanos');
        console.log('The boy who lived');
    } catch(error)
    {
        console.log('Error while connecting with the database', error.message);
        
    }
}

export default Connection;