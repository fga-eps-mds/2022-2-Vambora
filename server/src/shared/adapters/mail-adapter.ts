export interface SendMailData {
  subject: string;
  body: string;
  user_email?: string;
}

export interface IMailAdapter {
  sendMail?: (data: SendMailData) => Promise<void>;
}