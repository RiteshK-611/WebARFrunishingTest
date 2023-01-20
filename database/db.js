import mongoose from 'mongoose';

const Connection = async (URL) => {
    try {
        mongoose.connect(URL);
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error connecting: ', error.message)
    }
}

export default Connection;
