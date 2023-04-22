import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { FriendModule } from './friend/friend.module';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';

@Module({
  imports: [
    PostModule,
    FriendModule,
    ProjectModule,
    SkillModule,
    UserModule,
    AuthModule.forRoot({
      // These are the connection details of the app you created on supertokens.com
      connectionURI: process.env.CONNECTION_URI,
      apiKey: process.env.API_KEY,
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/thirdparty/appinfo
        appName: 'drakoshaa',
        apiDomain: process.env.ORIGIN,
        websiteDomain: process.env.ORIGIN,
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
