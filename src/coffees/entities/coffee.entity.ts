import { Flavor } from 'src/coffees/entities/flavor.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// @Entity('coffees') -> sql table == 'coffees'
@Entity() // sql table == 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees)
  flavours: string[];
}
