import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserDto {
  @ApiProperty({
    description: 'email',
    example: 'bayviol@yandex.ru',
  })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    description: 'Username',
    example: 'Vio',
  })
  readonly name: string;

  @ApiProperty({
    description: 'login',
    example: 'vioo',
  })
  @IsNotEmpty()
  readonly login: string;

  @ApiProperty({
    description: 'password',
    example: '123',
  })
  @IsNotEmpty()
  readonly password: number;
}
