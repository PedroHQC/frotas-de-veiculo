import { Module } from '@nestjs/common';
import { AbastecimentoService } from './abastecimento.service';
import { AbastecimentoController } from './abastecimento.controller';

@Module({
  controllers: [AbastecimentoController],
  providers: [AbastecimentoService]
})
export class AbastecimentoModule {
  constructor(public teste: number) {}
}
