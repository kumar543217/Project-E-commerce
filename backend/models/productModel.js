import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
})

const productModel = mongoose.model.product || mongoose.model("product", productSchema)

export default productModel;

// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },  // Changed to Number
//     image: { type: [String], required: true }, // Use [String] to ensure it's an array of strings
//     category: { type: String, required: true },
//     subCategory: { type: String, required: true },
//     sizes: { type: [String], required: true }, // Assuming sizes will be an array of strings
//     bestseller: { type: Boolean, default: false }, // Optional field with a default value
//     date: { type: Date, required: true, default: Date.now } // Date type, default to current date
// });

// // Fix the model assignment logic
// const productModel = mongoose.models.product || mongoose.model("product", productSchema);

// export default productModel;
