migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzagvdfy",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 15,
      "values": [
        "Android",
        "Ios",
        "Xbox",
        "Xbox360",
        "XboxOne",
        "XboxSS",
        "XboxSX",
        "PsX",
        "PsP",
        "PsVita",
        "Ps2",
        "Ps3",
        "Ps4",
        "Ps5",
        "Steam",
        "gog",
        "Epicgames",
        "itch",
        "NSwitch",
        "N3DS",
        "NDS",
        "NES",
        "SNES",
        "GameCube",
        "GameBoyAdvance",
        "GameBoy",
        "GameBoyColor",
        "Wii",
        "Wii U",
        "DreamCast",
        "SegaPico",
        "SegaSaturn",
        "SegaGenesis",
        "Atari"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14qbs7xvklre0cs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzagvdfy",
    "name": "game_platform",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 15,
      "values": [
        "xbox",
        "xbox360",
        "xboxOne",
        "xboxseriesS",
        "xboxseriesX",
        "psX",
        "ps2",
        "ps3",
        "ps4",
        "ps5",
        "steam",
        "gog",
        "epicgames",
        "itch",
        "nintendoSwitch"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
