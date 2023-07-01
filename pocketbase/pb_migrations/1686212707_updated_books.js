migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqvnblsa",
    "name": "book_buy_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "thztejyp",
    "name": "book_read_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // remove
  collection.schema.removeField("f1rlykbw")

  // remove
  collection.schema.removeField("dqvnblsa")

  // remove
  collection.schema.removeField("thztejyp")

  // remove
  collection.schema.removeField("gpw2pvak")

  return dao.saveCollection(collection)
})
