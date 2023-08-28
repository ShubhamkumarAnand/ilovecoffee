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
} from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAllCoffees() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOneCoffees(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  /**
   * When you access specific properties you'll not validate other properties
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCoffees(@Body() body) {
    return this.coffeesService.createOne(body);
  }

  /**
   * Put: Replace the entire resource because of this we need to have entire obj in the req payload
   * Patch: only modifies the resource partially like single property of an object
   */
  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() body) {
    return this.coffeesService.updateCoffee(id, body);
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string) {
    return this.coffeesService.deleteCoffee(id);
  }
}
