migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rs5ox0dh",
    "name": "game_complete",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v56qpdty",
    "name": "game_play_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plan",
        "playing",
        "played",
        "drop"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y71s2auq",
    "name": "game_play_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p7hjltwx",
    "name": "game_buy_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("rs5ox0dh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v56qpdty",
    "name": "game_play_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "plan",
        "playing",
        "played"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y71s2auq",
    "name": "game_play_priority",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p7hjltwx",
    "name": "game_buy_priority",
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
