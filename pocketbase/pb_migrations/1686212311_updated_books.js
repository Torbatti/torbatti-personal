migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkxqhrib",
    "name": "book_buy_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "دارا",
        "خواهان"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3sfwcaow",
    "name": "book_read_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "خوانده",
        "درحال",
        "انتظار",
        "پرتاب"
      ]
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2auq9q0hiowkcvv")

  // remove
  collection.schema.removeField("vkxqhrib")

  // remove
  collection.schema.removeField("3sfwcaow")

  // remove
  collection.schema.removeField("qxp9yewy")

  return dao.saveCollection(collection)
})
