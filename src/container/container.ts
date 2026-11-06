import "reflect-metadata";
import { Container } from "inversify";
import { PrismaClient } from '@prisma/client';
import { TYPES } from "./types";
import { EtherealMailProvider } from "../providers/EtherealMailProvider";
import { PrismaOrderRepository } from "../repositories/PrismaOrderRepository";
import { PrismaProductRepository } from "../repositories/PrismaProductRepository";
import { CreditCardPayment } from "../payments/CreditCardPayment";
import { DebitCardPayment } from "../payments/DebitCardPayment";
import { PixPayment } from "../payments/PixPayment";
import { PaymentMethodRegistry } from "../payments/PaymentMethodRegistry";
import { ConsoleMailProvider } from "../providers/ConsoleMailProvider";
import { InMemoryOrderRepository } from "../repositories/InMemoryOrderRepository";
import { NotificationService } from "../services/NotificationService";
import { OrderService } from "../services/OrderService";
import { OrderController } from "../controllers/OrderController";

const container = new Container();

const prisma = new PrismaClient();
container.bind<PrismaClient>(PrismaClient).toConstantValue(prisma);

const test = process.env.APPEnv === "test";

if (test) {
    container.bind(TYPES.MailProvider).to(ConsoleMailProvider).inSingletonScope();
    container.bind(TYPES.OrderRepository).to(InMemoryOrderRepository).inSingletonScope();
} else {
    container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
    container.bind(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
    container.bind(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();
}

container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);
container.bind(TYPES.PaymentMethodRegistry).to(PaymentMethodRegistry).inSingletonScope();
container.bind(TYPES.NotificationService).to(NotificationService).inSingletonScope();
container.bind(TYPES.OrderService).to(OrderService).inSingletonScope();
container.bind(TYPES.OrderController).to(OrderController).inSingletonScope();

export { container };