// import {
//   ArgumentsHost,
//   Catch,
//   ExceptionFilter,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Response } from 'express';
//
// @Catch(UnauthorizedException)
// export class AutorizedFilter implements ExceptionFilter {
//   catch(exception: UnauthorizedException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const resp = ctx.getResponse<Response>();
//     console.log('rrrrrrrr');
//     resp.redirect('/loginss');
//   }
// }
