import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(error.message).red;
        process.exit(1);
    }
}

export default connectDB