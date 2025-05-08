import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({}),
],
})
export class AuthModule {}
