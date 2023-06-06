migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("7zk2pk0x")

  // remove
  collection.schema.removeField("zdprbogw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8sili7mw",
    "name": "game_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "playing",
        "plan",
        "done",
        "wishlist",
        "drop"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zdprbogw",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "ps1",
        "ps2",
        "ps3",
        "ps4",
        "ps5",
        "steam",
        "epicgames",
        "gog",
        "xbox 360",
        "xbox series",
        "nintendo switch",
        "psp",
        "psvita"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8sili7mw",
    "name": "game_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plan",
        "done",
        "doing",
        "drop",
        "not owned"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
