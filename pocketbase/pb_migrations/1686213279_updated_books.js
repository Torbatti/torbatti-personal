migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxp9yewy",
    "name": "book_paper_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "فیزیکی",
        "مجازی"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxp9yewy",
    "name": "book_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "فیزیکی",
        "مجازی"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
