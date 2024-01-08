import mongoose from "mongoose";
import { uuid } from "uuidv4";

export const OrderSchema = new mongoose.Schema({
    _id: { type: String },
    id: { type: String, index: true },
    identityCode: { type: String, index: true },
    code: { type: String, index: true },
    name: { type: String, index: true },
    email: { type: String, index: true }
});

OrderSchema.pre('save', function (next) {
    this._id = this.get('id');
    next();
});