import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from 'src/coffees/entity/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'tombola',
      brand: 'italian',
      flavours: ['mocha', 'chocolate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new HttpException(
        `Coffee with id #${id} doesn't found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return coffee;
  }

  createOne(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  updateCoffee(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
    // throw 'A random error';
    if (coffee) {
      return coffee;
    }
  }

  deleteCoffee(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
