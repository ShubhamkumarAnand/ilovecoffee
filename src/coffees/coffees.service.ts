import { Injectable } from '@nestjs/common';
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
    return this.coffees.find((item) => item.id === +id);
  }

  createOne(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto);
  }

  updateCoffee(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id);
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
