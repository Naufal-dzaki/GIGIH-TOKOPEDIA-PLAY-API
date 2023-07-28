import mongoose from 'mongoose';
import development from '../config/development.json' assert { type: "json" };

export const port = () => {
    return development.PORT || 8080;
}

export const connectDB = async() => {
    try {
        await mongoose.connect(development.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect to DB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}
