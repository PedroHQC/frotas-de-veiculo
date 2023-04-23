import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeiculoModule } from './classes/veiculo/veiculo.module';
import { MotoristaModule } from './classes/motorista/motorista.module';
import { AbastecimentoModule } from './classes/abastecimento/abastecimento.module';
import { ViagemModule } from './classes/viagem/viagem.module';
import { ManutencaoModule } from './classes/manutencao/manutencao.module';
import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'frotaDVeiculos',
    entities: [],
    synchronize: true,
  }), VeiculoModule, MotoristaModule, AbastecimentoModule, ViagemModule, ManutencaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
