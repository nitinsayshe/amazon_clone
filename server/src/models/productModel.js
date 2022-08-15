const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        title: { type: String, required: true, unique: true, trim: true, lowercase: true },
        description: { type: String, required: true, trim: true },
        image: { type: String },
        price: { type: Number, required: true, trim: true },

        currencyId: { type: String, trim: true },
        currencyFormat: { type: String, trim: true },
        isFreeShipping: { type: Boolean, default: false, trim: true },
        style: { type: String },
        availableSizes: { type: [String], enum: ["S", "XS", "M", "X", "L", "XXL", "XL"] ,default:"S"},
        installments: { type: Number },
        deletedAt: { type: Date, default: null },
        isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema)