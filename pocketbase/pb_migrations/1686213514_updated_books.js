migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7z4t3oq4",
    "name": "book_series_chapters",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7z4t3oq4",
    "name": "book_chapters",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
