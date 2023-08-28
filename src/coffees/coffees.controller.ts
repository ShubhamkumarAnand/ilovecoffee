import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAllCoffees() {
    return 'All the variety of coffee';
  }

  @Get(':id')
  findOneCoffees(@Param('id') id: string) {
    return `This returns coffee with #${id} ID`;
  }

  /**
   * When you access specific properties you'll not validate other properties
   */
  @Post()
  createCoffees(@Body() body) {
    return body;
  }
}
