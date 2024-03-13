import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  id!: mongoose.Types.ObjectId;

  @Prop()
  name: string | null = null;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
