declare namespace Express {
    export interface Request {
      body: {
        subscriber?: string;
        amount?: number;
        interval?: string;
      };
    }
  }
  