migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e5vgpvb2",
    "name": "movie_rate",
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
  const collection = dao.findCollectionByNameOrId("6bxq67lholp4sjg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e5vgpvb2",
    "name": "movie_rate",
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
