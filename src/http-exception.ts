export class HttpException extends Error {
  public status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.stack = new Error(message).stack;
  }
}
