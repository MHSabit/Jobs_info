import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

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
        // entities: [User],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }
  ), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
