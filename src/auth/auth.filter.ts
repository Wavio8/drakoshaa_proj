import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import { errorHandler } from 'supertokens-node/framework/express';
import { Error as STError } from 'supertokens-node';

@Catch(STError)
export class SupertokensExceptionFilter implements ExceptionFilter {
  handler: ErrorRequestHandler;

  constructor() {
    this.handler = errorHandler();
  }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const resp = ctx.getResponse<Response>();

    // if (exception instanceof UnauthorizedException) {
    //   console.log('234');
    //   resp.redirect('/loginss'); // Здесь можно указать нужный URL для перенаправления
    //   return;
    // }

    if (resp.headersSent) {
      console.log('1234');
      // if (exception instanceof UnauthorizedException) {
      //   console.log('234');
      //   resp.redirect('/loginss'); // Здесь можно указать нужный URL для перенаправления
      //   return;
      // }
      // console.log(exception);
      // console.log(ctx.getNext<NextFunction>());
      // if (resp.statusCode === 401){
      //   console.log('llllll');
      //   resp.redirect('/loginss');
      // }
      return;
    }

    this.handler(
      exception,
      ctx.getRequest<Request>(),
      resp,
      ctx.getNext<NextFunction>(),
    );
  }
}
