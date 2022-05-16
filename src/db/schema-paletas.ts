import { getModelForClass, prop } from '@typegoose/typegoose'

class PaletasDB {
  @prop({ required: true })
  public sabor!: string

  @prop({ required: true })
  public descricao!: string

  @prop({ required: true })
  public foto!: string

  @prop({ required: true })
  public preco!: number
}

export const paletas = getModelForClass(PaletasDB)
