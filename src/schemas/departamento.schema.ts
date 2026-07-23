import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'departamentos' })
export class Departamento extends Document {
    @Prop({ required: true, unique: true, index: true })
    id_dep!: number;

    @Prop({ required: true, trim: true })
    descripcion!: string;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);


