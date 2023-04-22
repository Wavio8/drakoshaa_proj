import { Injectable, NestMiddleware } from '@nestjs/common';
import { middleware } from 'supertokens-node/framework/express';
import Session from 'supertokens-node/recipe/session';
import { VerifySessionOptions } from 'supertokens-node/recipe/session';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
// import { attachAuth } from 'supertokens-website';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  supertokensMiddleware: any;

  constructor() {
    this.supertokensMiddleware = middleware();
  }

  use(req: Request, res: any, next: () => void) {
    // const options: VerifySessionOptions = {
    //   sessionRequired: true,

    // };

    return this.supertokensMiddleware(req, res, next);
    // await this.supertokensMiddleware(req, res, async () => {
    //   await verifySession(options)(context.switchToHttp(), res, () => {
    //     if (req.session) {
    //       // User is authenticated - allow access to protected resources
    //       next();
    //     } else {
    //       // User is not authenticated - redirect to login page
    //       res.redirect('/login');
    //     }
    //   try {
    //     await verifySession(req, res, options);
    //     const session = await Session.getSession(req, res, options);
    //     // Если сессия пользователя существует, вызываем следующий middleware
    //     next();
    //   } catch (error) {
    //     // Если сессия отсутствует, перенаправляем пользователя на страницу входа
    //     res.redirect('/login');
    //   }
    //   if (await session) {
    //     console.log('7777');
    //   } else {
    //     res.redirect('/loginss');
    //     // user has not logged in yet
    //   }
    //   // Проверяем наличие сессии пользователя
    // } catch (e) {
    //   console.error('Error in AuthMiddleware: ', e);
    //   res.status(500).send('Internal Server Error');
  }
  // });
}
