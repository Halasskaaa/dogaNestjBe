import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';


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
  getFilter() {
    return { 
      title: 'Szűrés',
      products: this.appService.products.sort((a, b) => a.name.localeCompare(b.name))
    };
  }




};
  

