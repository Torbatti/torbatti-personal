migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f1rlykbw",
    "name": "book_series_type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "مجموعه",
        "تک قسمت"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpw2pvak",
    "name": "book_series_title",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f1rlykbw",
    "name": "book_",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "مجموعه",
        "تک قسمت"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gpw2pvak",
    "name": "field",
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
})
