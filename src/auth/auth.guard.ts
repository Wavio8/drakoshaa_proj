import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Error as STError } from 'supertokens-node';

import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import Session, { VerifySessionOptions } from 'supertokens-node/recipe/session';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly verifyOptions?: VerifySessionOptions) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.switchToHttp();

    let err = undefined;
    const resp = ctx.getResponse();
    // You can create an optional version of this by passing {sessionRequired: false} to verifySession
    // await verifySession({ ...this.verifyOptions, sessionRequired: false })(
    console.log(resp.statusCode);
    await verifySession({ ...this.verifyOptions, sessionRequired: false })(
      ctx.getRequest(),
      resp,
      (res) => {
        // console.log(res);
        // if (resp.statusCode === 401) {
        //   console.log('erfeef');
        //   resp.redirect('/login');
        // }
        //
        // console.log(resp.statusCode);
        // try {
        //   await Session.getSession(ctx.getRequest(), resp);
        // } catch (error) {
        //   console.log('ex');
        //   resp.redirect('/loginss');
        //   return;
        // }
        //
        // console.log('ver');

        err = res;
        console.log(err);
      },
    );
    // console.log('RESPONSE_SENT');
    if (!resp.headersSent) {
      if (err === undefined) {
        resp.redirect('/loginss');
      }
    }
    // if (err === undefined) {
    //   console.log('un');
    //   resp.redirect(resp.redirect('/loginss'));
    // }

    if (resp.headersSent) {
      console.log('3333');
      throw new STError({
        message: 'RESPONSE_SENT',
        type: 'RESPONSE_SENT',
      });
    }

    if (err) {
      console.log('980');
      throw err;
    }

    return true;
  }
}
