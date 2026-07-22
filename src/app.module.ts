import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './controllers/health.controller';
import { DepartamentosModule } from './modules/departamentos.module';

import { AppController } from './app.controller';    // se puede borrar este archivo
import { AppService } from './app.service';          // se puede borrar este archivo

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>(
          'MONGODB_URI',
          'mongodb://localhost:27017/prueba',
        ),
      }),
    }),
    DepartamentosModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})


export class AppModule { }


