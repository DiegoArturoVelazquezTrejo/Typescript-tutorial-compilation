import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // Config Module helps us to load environment variables from a .env file
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Import the AuthModule
    AuthModule,
    // Import the UserModule
    UserModule,
    // Import the BookmarkModule
    BookmarkModule,
    // Import the PrismaModule
    PrismaModule,
  ],
})
// Export the AppModule
export class AppModule {}