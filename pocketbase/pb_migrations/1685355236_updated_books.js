migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybdjuq7l",
    "name": "book_rate",
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
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybdjuq7l",
    "name": "book_rate",
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
