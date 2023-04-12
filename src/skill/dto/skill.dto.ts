import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SkillDto {
  @ApiProperty({
    description: 'Name skill',
    example: 'Designer',
  })
  @IsNotEmpty()
  readonly skill: string;

  @ApiProperty({
    description: 'Level Skill',
    example: '8',
  })
  @IsNotEmpty()
  readonly level: number;

  // @ApiProperty({
  //   description: 'studentId',
  //   example: '1',
  // })
  // readonly studentId: number;
}
