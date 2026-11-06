import { injectable } from "inversify";
import { IMailProvider, Mail } from "./IMailProvider";


@injectable()
export class ConsoleMailProvider implements IMailProvider {
    
    constructor() {}

    async sendMail(mail: Mail): Promise<string | null> {
        console.log(`[Teste] e-mail enviado para: ${mail.to}`);
        console.log(`[Teste] assunto: ${mail.subject}`);
        console.log(`[Teste] conteúdo: ${mail.text}`);
        
        return null;
    }
}