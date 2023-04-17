// import {
//   ExceptionFilter,
//   Catch,
//   ArgumentsHost,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
//
//
// @Catch(UnauthorizedException)
// export class AuthAutorizedFilter implements ExceptionFilter {
//   catch(exception: UnauthorizedException, host: ArgumentsHost) {
//     console.log('2134');
//     const ctx = host.switchToHttp();
//     const resp = ctx.getResponse<Response>();
//     resp.redirect('/loginss');
//   }
// }
