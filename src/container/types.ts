import { NotificationService } from "../services/NotificationService";
import { OrderService } from "../services/OrderService";

export const TYPES = {
   //repositories/  # IOrderRepository, IProductRepository
   //providers/     # IMailProvider 
   //payments/      # IPaymentMethod
   //services/      # OrderService e NotificationService
   
   OrderRepository: Symbol.for("OrderRepository"),
   ProductRepository: Symbol.for("ProductRepository"),
   MailProvider: Symbol.for("MailProvider"),
   PaymentMethod: Symbol.for("PaymentMethod"),
   OrderService: Symbol.for("OrderService"),
   NotificationService: Symbol.for("NotiticationService")
}