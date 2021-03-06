import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Category', categorySchema)