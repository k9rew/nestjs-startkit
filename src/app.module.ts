import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { env } from './configs';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [MongooseModule.forRoot(env.MONGODB_URI), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
