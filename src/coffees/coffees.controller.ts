import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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

  /**
   * Put: Replace the entire resource because of this we need to have entire obj in the req payload
   * Patch: only modifies the resource partially like single property of an object
   */
  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() body) {
    return `This returns the ${id} as well as ${body.name}`;
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string) {
    return `Coffee with #${id} deleted`;
  }
}
