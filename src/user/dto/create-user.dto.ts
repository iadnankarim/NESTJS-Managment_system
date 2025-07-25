// import { IsEmail, IsNotEmpty, IsString } from "class-validator";

// export class CreateUserDto {
//    @IsNotEmpty()
//    @IsString()
//    firstName:string;

//    @IsNotEmpty()
//    @IsString()
//    lastName:string;

//   @IsNotEmpty()
//   @IsEmail()
//   email:string
// }

import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}
