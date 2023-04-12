import { ApiProperty } from '@nestjs/swagger';


export class StudentSkillDto {
  @ApiProperty({
    description: 'studentId',
    example: '4',
  })
  readonly studentId: number;

  @ApiProperty({
    description: 'skillId',
    example: '1',
  })
  readonly skillId: number;
}
