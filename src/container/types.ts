import { PrismaClient } from "@prisma/client/extension";
import { OrderController } from "../controllers/OrderController";
import { NotificationService } from "../services/NotificationService";
import { OrderService } from "../services/OrderService";
import { PaymentMethodRegistry } from "../payments/PaymentMethodRegistry";

export const TYPES = {
   //repositories/  # IOrderRepository, IProductRepository
   //providers/     # IMailProvider 
   //payments/      # IPaymentMethod
   //services/      # OrderService e NotificationService
   
   OrderRepository: Symbol.for("OrderRepository"),
   ProductRepository: Symbol.for("ProductRepository"),
   MailProvider: Symbol.for("MailProvider"),
   PaymentMethod: Symbol.for("PaymentMethod"),
   PaymentMethodRegistry: Symbol.for("PaymentMethodRegistry"),
   OrderService: Symbol.for("OrderService"),
   NotificationService: Symbol.for("NotiticationService"),
   OrderController: Symbol.for("OrderController"),
   PrismaClient: Symbol.for("PrismaClient")
}