import { IsString, IsNumber, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name:string
    
    @IsString()
    @IsNotEmpty()
    readonly category:string
    
    @IsString()
    @IsNotEmpty()
    readonly price:number
    
    @IsString()
    @IsNotEmpty()
    readonly stock:number
}