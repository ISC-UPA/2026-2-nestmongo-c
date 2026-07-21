import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartamentosModule } from './modules/departamentos/departamentos.module';
import { HealthController } from './controllers/health/health.controller';
import { DepartamentosController } from './controllers/departamentos/departamentos.controller';
import { DepartamentosService } from './services/departamentos/departamentos.service';

@Module({
  imports: [DepartamentosModule],
  controllers: [AppController, HealthController, DepartamentosController],
  providers: [AppService, DepartamentosService],
})
export class AppModule {}
