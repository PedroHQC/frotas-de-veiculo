import { Injectable } from '@nestjs/common';
import { CreateAbastecimentoDto } from './dto/create-abastecimento.dto';
import { UpdateAbastecimentoDto } from './dto/update-abastecimento.dto';

@Injectable()
export class AbastecimentoService {
  create(createAbastecimentoDto: CreateAbastecimentoDto) {
    return 'This action adds a new abastecimento';
  }

  findAll() {
    return `This action returns all abastecimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abastecimento`;
  }

  update(id: number, updateAbastecimentoDto: UpdateAbastecimentoDto) {
    return `This action updates a #${id} abastecimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} abastecimento`;
  }
}
