// Example JSON
//
//// gameData = {
////   players: [],
////   games: [
////     {
////       gameNumber: Number,
////       date: Date,
////       location: String,
////       scores: {
////         [[playerName]]: {
////           city: String,
////           side: A/B,
////           military: Number,
////           gold: Number,
////           wonder: Number,
////           civic: Number,
////           commercial: Number,
////           guild: Number,
////           science: Number,
////           total: Number,
////         },
////         ...
////       },
////       ...
////     },
////     ...
////   ]
//// }

gameData = {
  "players": ["Charlie"],
  "games": [
    {
      "gameNumber": 0,
      "date": "11/1/1994",
      "location": "Houston, TX",
      "scores": {
        "Charlie": {
          "city": "Babylon",
          "side": "A",
          "military": 1,
          "gold": 1,
          "wonder": 1,
          "civic": 1,
          "commercial": 1,
          "guild": 1,
          "science": 1,
          "total": 7
        }
      }
    }
  ]
}
