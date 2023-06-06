migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zk2pk0x",
    "name": "buy_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "buy",
        "refund",
        "free",
        "wishlist"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7zk2pk0x",
    "name": "buy_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "buy",
        "refund",
        "free",
        "wish"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
