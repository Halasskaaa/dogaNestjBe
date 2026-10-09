import { Body, Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import {CreateProductDto} from './dto.js'
import { Product } from './termek.js';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return { 
      title: 'Termékek listája',
      products: this.appService.products.sort((a, b) => a.name.localeCompare(b.name))
    };
  }

  @Get('filter')
  @Render('filter')
  getFilter(@Query('category') category: string) {
    return { 
      title: 'Szűrés',
      category: category,
      products: category 
        ? this.appService.products.filter(product => product.category === category)
        : this.appService.products.sort((a, b) => b.stock - a.stock)
    };
  }

  
  @Get('new')
  @Render('new')
  getAddNew(@Body() body: CreateProductDto )
  {
    const newProduct : Product = {
      name: body.name,
      category: body.category,
      price: body.price,
      stock: body.stock
    }
    this.appService.products.push(newProduct)

    return{
      success:true
    }
  }
};
  

