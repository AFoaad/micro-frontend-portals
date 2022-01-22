import { Module } from '@nestjs/common';

import { productsController } from './products.controller';

@Module({
  controllers: [productsController],
})
export class productsModule {}
