import { injectable } from "inversify";
import { IOrderRepository } from "./IOrderRepository";
import { Order, OrderLine } from "../domain/Order";

@injectable()
export class InMemoryOrderRepository implements IOrderRepository {
    private orders: Order[] = [];

    async create(customer: string, items: OrderLine[], total: number): Promise<Order> {
        const newOrder: Order = {
            id: Math.floor(Math.random() * 100000),
            customer,
            items,
            total,
            status: "Pedindo"
        };
        this.orders.push(newOrder);

        return newOrder;
    }
}