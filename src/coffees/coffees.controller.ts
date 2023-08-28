import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getAllCoffees(@Res() response) {
    response.status(200).send('All the variety of coffee');
  }

  @Get(':id')
  findOneCoffees(@Param('id') id: string) {
    return `This returns coffee with #${id} ID`;
  }

  /**
   * When you access specific properties you'll not validate other properties
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCoffees(@Body() body) {
    return body;
  }
}
