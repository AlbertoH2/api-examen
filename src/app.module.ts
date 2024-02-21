import { Module } from '@nestjs/common';
import { IndexController } from './index/index.controller';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [],
})
export class AppModule {}
