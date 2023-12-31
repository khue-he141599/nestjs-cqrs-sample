import * as mongoose from 'mongoose';
import { ConfigService } from '../../config/config.service';


const Mongoose = mongoose.Mongoose;
const instance = new Mongoose();

export const CommandDatabaseProvider = [
    {
        provide: "Order",
        useFactory: async (): Promise<typeof mongoose> =>{
            (instance as any).Promise = global.Promise;
            const configService = new ConfigService(`.env.${process.env.NODE_ENV}`);
            const mongooseUrl = configService.get('MONGODB_URL_LOCAL');
            const rs = await instance.connect(mongooseUrl)
            console.log(rs);
            return rs;
        }
    }
]