import { ArrayNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @IsNotEmpty({ each: true })
  @ArrayNotEmpty()
  @IsString({ each: true })
  readonly flavors: string[];
}
