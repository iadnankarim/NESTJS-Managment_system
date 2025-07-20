// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   // @Column()
//   // phoneNumber: number;

//   @Column({ unique: true })
//   email: string;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;
}
