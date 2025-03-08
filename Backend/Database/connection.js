import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://abhishek:1NlwIdbPvr3xF0Yp@chatterbox.1emvdyq.mongodb.net/LearnSphere?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export default connectDB;