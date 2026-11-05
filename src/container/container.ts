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

const container = new Container();

container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();
container.bind(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();
container.bind(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();
container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);
container.bind(TYPES.PaymentMethod).to(PaymentMethodRegistry);

export { container };