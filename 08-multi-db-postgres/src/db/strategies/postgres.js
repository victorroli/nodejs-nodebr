const ICrud = require('./interfaces/InterfaceCrud');
const Sequelize = require('sequelize');

class Postgres extends ICrud {
  constructor() {
    super();
    this._driver = null;
    this._herois = null;
    this._connect();
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
    this._herois = driver.define(
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
    await Herois.sync();
  }

  _connect() {
    this._driver = new Sequelize('heroes', 'victoroliveira', 'minhasenha', {
      host: 'localhost',
      dialect: 'postgres',
      quoteIdentifiers: false,
      operatoresAliases: false
    });
  }

  create(item) {
    console.log('O item foi salvo em Postgres!');
  }
}

module.exports = Postgres;
