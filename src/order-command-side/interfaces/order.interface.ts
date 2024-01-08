import { Document } from 'mongoose';

export interface IOrder extends Document {
    identityCode: string;
    code: string;
    name: string;
    email: string;
}