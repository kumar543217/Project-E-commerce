// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";


// // Placing order using COD Method
// const placeOrder = async (req, res) => {

//     try {
//         const { userId, items, amount, address } = res.body;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod: "COD",
//             mayment: false,
//             date: Date.now()
//         }

//         const newOrder = new orderModel(orderData);
//         await newOrder.save()

//         await userModel.finbByIdAndUpdate(userId, { cartData: {} })

//         res.json({ success: true, message: "Order Placed" })

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message })
//     }

// }

// // Placing orders using Stripe Method
// const placeOrderStripe = async (req, res) => {

// }

// //Placing orders using Razorpay Method
// const placeOrderRezorpay = async (req, res) => {

// }

// // All Orders data for Adin Panel
// const allOrders = async (req, res) => {

// }

// // User Order Data For Forntend
// const userOrders = async (req, res) => {

// }

// // Update orders status from Admin Panel
// const updateStatus = async (req, res) => {

// }

// export {
//     placeOrder, placeOrderStripe, placeOrderRezorpay,
//     allOrders, userOrders, updateStatus
// }


import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing order using COD Method
const placeOrder = async (req, res) => {

    try {
        // Extracting from req.body instead of res.body
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false, // Fixed typo from 'mayment' to 'payment'
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Fixed typo from 'finbByIdAndUpdate' to 'findByIdAndUpdate'
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {

}

// Placing orders using Razorpay Method
const placeOrderRezorpay = async (req, res) => {

}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {

    try {

        const orders = await orderModel.find({})
        res.json({ success: true, orders })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

}

// User Order Data For Frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update orders status from Admin Panel
const updateStatus = async (req, res) => {
        try {
            
            const {orderId, status} = req.body
            await orderModel.findByIdAndUpdate(orderId, {status})
            res.json({success:true, message:"Status Updated"})

        } catch (error) {
            console.log(error);
            res.json({success:false, message:error.message})
        }
}

export {
    placeOrder, placeOrderStripe, placeOrderRezorpay,
    allOrders, userOrders, updateStatus
}
