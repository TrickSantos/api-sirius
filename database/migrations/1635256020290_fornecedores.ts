import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fornecedores extends BaseSchema {
  protected tableName = 'fornecedores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('empresa_id').unsigned().references('empresas.id').onDelete('cascade')
      table.string('nome')
      table.string('razao_social')
      table.string('telefone')
      table.string('email')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
