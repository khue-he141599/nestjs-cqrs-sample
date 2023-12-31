import { Controller } from "@nestjs/common";
import { OrderQuerySideService } from "./service/order-query-side.service";


@Controller('order-query-side')
export class OrderQuerySideController {
    constructor(private readonly orderQuerySideService: OrderQuerySideService){}
}