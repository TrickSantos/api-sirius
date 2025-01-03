import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recebers extends BaseSchema {
  protected tableName = 'receber'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('empresa_id')
        .unsigned()
        .references('empresas.id')
        .onDelete('cascade')
        .notNullable()
      table
        .integer('cliente_id')
        .unsigned()
        .references('clientes.id')
        .onDelete('cascade')
        .notNullable()
      table
        .integer('created_by')
        .unsigned()
        .references('users.id')
        .onDelete('cascade')
        .notNullable()
      table.decimal('valor')
      table.enum('status', ['pago', 'aguardando', 'vencido']).defaultTo('aguardando')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
