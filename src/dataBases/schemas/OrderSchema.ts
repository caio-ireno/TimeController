export const OrderSchema = {
  name: 'Order',
  properties: {
    _id: 'string',
    paciente: 'string',
    sala: 'string',
    prontuario: 'string',
    queixa: 'string',
    data: 'string',
    inicio: 'string',
    fim: 'string',
    color: 'string',
    created_at: 'date',
  },

  primaryKey: '_id',
}
