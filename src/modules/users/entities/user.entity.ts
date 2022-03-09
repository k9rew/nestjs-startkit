import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'USER' })
  role: 'SUPER_ADMIN' | 'ADMIN' | 'USER';

  @Prop({ default: new Date() })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
