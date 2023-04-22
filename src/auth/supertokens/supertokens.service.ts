import { Inject, Injectable } from '@nestjs/common';

import supertokens from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
// import Session from "supertokens-auth-react/recipe/session";
import Dashboard from 'supertokens-node/recipe/dashboard';

import EmailPassword from 'supertokens-node/recipe/emailpassword';

import { ConfigInjectionToken, AuthModuleConfig } from '../config.interface';

@Injectable()
export class SupertokensService {
  constructor(@Inject(ConfigInjectionToken) private config: AuthModuleConfig) {
    supertokens.init({
      appInfo: config.appInfo,
      supertokens: {
        connectionURI: config.connectionURI,
        apiKey: config.apiKey,
      },
      recipeList: [
        Dashboard.init(),
        EmailPassword.init(),
        Session.init({ cookieSameSite: 'lax' }),
      ],
    });
  }
}
