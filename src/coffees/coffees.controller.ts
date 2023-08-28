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
import { CreateCoffeeDto } from 'src/coffees/dto/create-coffee.dto';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';

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
  createCoffees(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    this.coffeesService.createOne(createCoffeeDto);
    return createCoffeeDto;
  }

  /**
   * Put: Replace the entire resource because of this we need to have entire obj in the req payload
   * Patch: only modifies the resource partially like single property of an object
   */
  @Patch(':id')
  updateCoffee(
    @Param('id') id: string,
    @Body() updateCoffeeDt0: UpdateCoffeeDto,
  ) {
    return this.coffeesService.updateCoffee(id, updateCoffeeDt0);
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string) {
    return this.coffeesService.deleteCoffee(id);
  }
}
