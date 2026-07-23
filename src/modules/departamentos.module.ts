import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentosController } from '../controllers/departamentos.controller';
import { DepartamentosService } from '../services/departamentos.service';
import { Departamento } from '../schemas/departamento.schema';
import { DepartamentoSchema } from '../schemas/departamento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Departamento.name, schema: DepartamentoSchema },
    ]),
  ],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
})

export class DepartamentosModule {}
