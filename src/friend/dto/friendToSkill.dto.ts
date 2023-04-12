import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from '../../user/dto/user.dto';
import { Friend, FriendToSkill } from '@prisma/client';

export class FriendToSkillDto {

  @ApiProperty({
    description: 'friend',
    example: '8',
  })
  @IsNotEmpty()
  friend: Friend;

  @ApiProperty({
    description: 'Skills',
    example: 'ListOfSkill',
  })
  skills: FriendToSkill[];
}
