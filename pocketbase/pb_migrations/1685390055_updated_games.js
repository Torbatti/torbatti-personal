migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvfcoozc",
    "name": "game_developer",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("uvfcoozc")

  return dao.saveCollection(collection)
})
