import "reflect-metadata";
import { Container } from "inversify";
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

const container = new Container();

const test = process.env.APPEnv === "test";

if (test) {
    container.bind(TYPES.MailProvider).to(ConsoleMailProvider).inSingletonScope();
} else {
    container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
}

if (test) {
    container.bind(TYPES.OrderRepository).to(InMemoryOrderRepository).inSingletonScope();
} else {
    container.bind(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
}

container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
container.bind(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
container.bind(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();
container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);
container.bind(TYPES.PaymentMethod).to(PaymentMethodRegistry);

export { container };