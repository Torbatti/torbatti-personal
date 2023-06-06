migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lxqhldd",
    "name": "game_rate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lxqhldd",
    "name": "game_rate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 10
    }
  }))

  return dao.saveCollection(collection)
})
