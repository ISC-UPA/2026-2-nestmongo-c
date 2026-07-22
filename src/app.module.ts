import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller';
import { DepartamentosModule } from './modules/departamentos.module';

import { AppController } from './app.controller';    // se puede borrar este archivo
import { AppService } from './app.service';          // se puede borrar este archivo

@Module({
  imports: [DepartamentosModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
