import mongoose from 'mongoose';


const plantSchema = new mongoose.Schema(
{
name: { type: String, required: true, trim: true },
price: { type: Number, required: true, min: 0 },
categories: { type: [String], default: [] },
inStock: { type: Boolean, default: true },
imageUrl: { type: String, default: '' }
},
{ timestamps: true }
);


plantSchema.index({ name: 'text', categories: 'text' }); // for text search


export const Plant = mongoose.model('Plant', plantSchema);