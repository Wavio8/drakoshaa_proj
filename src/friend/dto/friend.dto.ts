import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from '../../user/dto/user.dto';

export class FriendDto {
  @ApiProperty({
    description: 'Name',
    example: 'Vio',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'UserID',
    example: '1',
  })
  @IsNotEmpty()
  readonly clientId: number;

  @ApiProperty({
    description: 'rating',
    example: '8',
  })
  @IsNotEmpty()
  readonly rating: number;

  // @ApiProperty({
  //   description: 'Skill Id',
  //   example: '1',
  // })
  // readonly skillId: number;
}
