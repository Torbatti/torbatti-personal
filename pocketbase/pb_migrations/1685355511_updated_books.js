migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulqa4egf",
    "name": "book_genre",
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
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // remove
  collection.schema.removeField("ulqa4egf")

  return dao.saveCollection(collection)
})
