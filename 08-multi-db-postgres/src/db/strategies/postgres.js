const ICrud = require('./interfaces/InterfaceCrud');
const Sequelize = require('sequelize');

class Postgres extends ICrud {
  constructor() {
    super();
    this._driver = null;
    this._herois = null;
    // this._connect();
  }

  async isConnected() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.error('Fail!', error);
    }
  }

  async defineModel() {
    this._herois = this._driver.define(
      'herois',
      {
        id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING,
          required: true
        },
        poder: {
          type: Sequelize.STRING,
          required: true
        }
      },
      {
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
      }
    );
    await this._herois.sync();
  }

  async connect() {
    this._driver = new Sequelize('heroes', 'victoroliveira', 'minhasenha', {
      host: 'localhost',
      dialect: 'postgres',
      quoteIdentifiers: false,
      operatoresAliases: false
    });
    await this.defineModel();
  }

  create(item) {
    return this._herois.create(item);
  }

  async read(item = {}) {
    return this._herois.findAll({ where: item, raw: true });
  }

  async update(id, item) {
    return this._herois.update(item, { where: { id: id } });
  }
}

module.exports = Postgres;
