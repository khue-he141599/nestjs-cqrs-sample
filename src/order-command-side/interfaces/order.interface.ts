import { Document } from 'mongoose';

export interface IOrder extends Document {
    id: string;
    identityCode: string;
    code: string;
    name: string;
    email: string;
}