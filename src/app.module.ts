import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { FriendModule } from './friend/friend.module';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PostModule, FriendModule, ProjectModule, SkillModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
