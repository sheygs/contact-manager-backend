import {
  Entity,
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './user';

@Entity({ name: 'contacts' })
class Contact extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'user_id',
    type: 'uuid',
    nullable: false,
  })
  user_id!: string;

  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 50,
  })
  first_name!: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 50,
  })
  last_name!: string;

  @Column({
    name: 'phone_number',
    type: 'varchar',
    length: 50,
  })
  phone_number!: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  created_at!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: true,
  })
  updated_at!: Date;

  @ManyToOne(() => User, (user: User) => user.contacts)
  @JoinColumn({ foreignKeyConstraintName: 'id', name: 'user_id' })
  user!: User;
}

export { Contact };
