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

    console.log(resp.statusCode);

    await verifySession(this.verifyOptions)(ctx.getRequest(), resp, (res) => {
      err = res;
    });

    if (resp.headersSent) {
      console.log('3333');
      throw new STError({
        message: 'RESPONSE_SENT',
        type: 'RESPONSE_SENT',
      });
    }

    if (err) {
      // resp.redirect('/login');
      console.log('980');
      throw err;
    }

    return true;
  }
}
