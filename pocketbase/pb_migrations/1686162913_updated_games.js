migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // remove
  collection.schema.removeField("8sili7mw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k7qevh1s",
    "name": "game_own_state",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "owned",
        "wishlist"
      ]
    }
  }))

  // add
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

  // add
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tnhn5l3",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "xbox",
        "psx",
        "pc",
        "other"
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tua9dz9d3yeo2y")

  // add
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

  // remove
  collection.schema.removeField("k7qevh1s")

  // remove
  collection.schema.removeField("v56qpdty")

  // remove
  collection.schema.removeField("p7hjltwx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tnhn5l3",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "none",
        "xbox",
        "psx",
        "pc",
        "nintendo"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y71s2auq",
    "name": "game_priority",
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
