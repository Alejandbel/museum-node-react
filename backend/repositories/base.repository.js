export class BaseRepository {
  /** @type {Model}   */
  model;

  constructor(model) {
    this.model = model;
  }

  /**
   * @param {Record<*, *>} documentToCreate
   */
  async create(documentToCreate) {
    /** @type {{toObject()}} */
    const document = await this.model.create(documentToCreate);
    return document.toObject();
  }

  /**
   * @param id
   */
  async findById(id) {
    return this.model.findById(id).lean();
  }

  /**
   * @param {FilterQuery<*>} filter
   */
  async findOne(filter) {
    return this.model.findOne(filter).lean();
  }

  /**
   * @param {FilterQuery<*>} [filter]
   */
  async find(filter) {
    return this.model.find(filter).lean();
  }
}
