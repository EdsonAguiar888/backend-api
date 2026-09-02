import { Module } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { ConsumoController } from './consumo.controller';

@Module({
  providers: [ConsumoService],
  controllers: [ConsumoController]
})
export class ConsumoModule {}
