import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    video_id: { type: Number, required: true },
    product_url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
}, {timestamps: true});

export const products = mongoose.model('products', productSchema);