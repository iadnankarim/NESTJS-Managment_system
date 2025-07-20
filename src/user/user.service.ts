import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //user create
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    //checking exiting email
    const existingUser = await this.userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      throw new BadRequestException({ message: 'Email already Exist' });
    }

    //create new user
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  //read all user
  //find will return arrary
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  //read single user
  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException({ message: 'user not found' });
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const updateUser = await this.userRepository.merge(user, updateUserDto);
    // return this.userRepository.findOne({ where: { id } });
    return await this.userRepository.save(updateUser);
  }

  async remove(id: number): Promise<User> {
    console.log('Deleting user with ID:', id);
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }
}
