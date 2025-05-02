import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRootAsync(
    {
      imports : [],
      inject : [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '21292732',
        database: 'jobs_info',
        entities: [],
        synchronize: true,
      }),
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
