import { container } from "tsyringe"
import "@modules/users/container"
import { IMailAdapter } from "../adapters/mail-adapter"
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter"

container.registerSingleton<IMailAdapter>("MailAdapter", NodemailerMailAdapter)
