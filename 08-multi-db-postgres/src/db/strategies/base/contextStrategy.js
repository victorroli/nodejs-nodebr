const ICrud = require('./../interfaces/InterfaceCrud');

class ContextStrategy extends ICrud {
  constructor(strategy) {
    super();
    this._database = strategy;
  }

  async create(item) {
    const { dataValues } = await this._database.create(item);
    return dataValues;
  }
  read(item) {
    return this._database.read(item);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
  isConnected() {
    return this._database.isConnected();
  }
  connect() {
    return this._database.connect();
  }
}

module.exports = ContextStrategy;
