import { Injectable } from '@nestjs/common';
import { CreateClassroomInput } from './dto/create-classroom.input';
import { UpdateClassroomInput } from './dto/update-classroom.input';

@Injectable()
export class ClassroomService {
  create(createClassroomInput: CreateClassroomInput) {
    return 'This action adds a new classroom';
  }

  findAll() {
    return `This action returns all classroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classroom`;
  }

  update(id: string, updateClassroomInput: UpdateClassroomInput) {
    return `This action updates a #${id} classroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} classroom`;
  }
}
