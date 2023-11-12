export const jsonstring = `
{
  "init": {
    "players": [
      {
        "id": "e869aa89fb760fd621e6a7f9",
        "index": 0,
        "name": "Test Bot (easy)"
      },
      {
        "id": "e1c2d3a5fc5309de6595067b",
        "index": 1,
        "name": "Test Bot (hard)"
      }
    ],
    "boardSize": 9,
    "numOfWalls": 15
  },
  "ticks": [
    {
      "currentPlayer": -1,
      "pawnPos": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 4,
          "y": 8
        }
      ],
      "walls": [],
      "ownedWalls": [
        10,
        10
      ],
      "action": {
        "type": "start"
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "2\\n0\\n9\\n4 0 10\\n4 8 10",
              "timestamp": 1699800130928
            }
          ],
          "sent": [],
          "distance": 8
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "2\\n1\\n9\\n4 0 10\\n4 8 10",
              "timestamp": 1699800130929
            }
          ],
          "sent": [],
          "distance": 8
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 8
        }
      ],
      "walls": [],
      "ownedWalls": [
        10,
        10
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "1\\n4 0 10\\n4 8 10\\n0\\n",
              "timestamp": 1699800130930
            }
          ],
          "sent": [
            {
              "message": "4 1",
              "timestamp": 1699800130941
            }
          ],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 8
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [],
      "ownedWalls": [
        10,
        10
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 7
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "2\\n4 1 10\\n4 8 10\\n0\\n",
              "timestamp": 1699800130942
            }
          ],
          "sent": [
            {
              "message": "4 7",
              "timestamp": 1699800130953
            }
          ],
          "distance": 7
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        9,
        10
      ],
      "action": {
        "type": "place",
        "x": 0,
        "y": 0,
        "isVertical": 0
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "3\\n4 1 10\\n4 7 10\\n0\\n",
              "timestamp": 1699800130954
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1699800130964
            }
          ],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 7
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        9,
        10
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 6
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "4\\n4 1 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1699800130965
            }
          ],
          "sent": [
            {
              "message": "4 6",
              "timestamp": 1699800130975
            }
          ],
          "distance": 6
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        8,
        10
      ],
      "action": {
        "type": "place",
        "x": 2,
        "y": 0,
        "isVertical": 0
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "5\\n4 1 9\\n4 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1699800130975
            }
          ],
          "sent": [
            {
              "message": "2 0 0",
              "timestamp": 1699800130985
            }
          ],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 6
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        8,
        10
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 5
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "6\\n4 1 8\\n4 6 10\\n2\\n0 0 0 0\\n2 0 0 0\\n",
              "timestamp": 1699800130985
            }
          ],
          "sent": [
            {
              "message": "4 5",
              "timestamp": 1699800130995
            }
          ],
          "distance": 5
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        7,
        10
      ],
      "action": {
        "type": "place",
        "x": 5,
        "y": 1,
        "isVertical": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "7\\n4 1 8\\n4 5 10\\n2\\n0 0 0 0\\n2 0 0 0\\n",
              "timestamp": 1699800130996
            }
          ],
          "sent": [
            {
              "message": "5 1 1",
              "timestamp": 1699800131006
            }
          ],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 5
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        7,
        10
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 4
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "8\\n4 1 7\\n4 5 10\\n3\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n",
              "timestamp": 1699800131007
            }
          ],
          "sent": [
            {
              "message": "4 4",
              "timestamp": 1699800131017
            }
          ],
          "distance": 4
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        6,
        10
      ],
      "action": {
        "type": "place",
        "x": 5,
        "y": 3,
        "isVertical": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "9\\n4 1 7\\n4 4 10\\n3\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n",
              "timestamp": 1699800131018
            }
          ],
          "sent": [
            {
              "message": "5 3 1",
              "timestamp": 1699800131029
            }
          ],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 4
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 1
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "place",
        "x": 4,
        "y": 0,
        "isVertical": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "10\\n4 1 6\\n4 4 10\\n4\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n",
              "timestamp": 1699800131029
            }
          ],
          "sent": [
            {
              "message": "4 0 1",
              "timestamp": 1699800131039
            }
          ],
          "distance": 4
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 3,
        "y": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "11\\n4 1 6\\n4 4 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131039
            }
          ],
          "sent": [
            {
              "message": "4 0 0",
              "timestamp": 1699800131049
            }
          ],
          "error": "Invalid input! Reason: The new (horizontal) wall intersects a previous (vertical) wall.",
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 4
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 3,
          "y": 1
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 3
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 7
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "12\\n3 1 6\\n4 4 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131049
            }
          ],
          "sent": [
            {
              "message": "4 3",
              "timestamp": 1699800131060
            }
          ],
          "distance": 3
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 3,
        "y": 2
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "13\\n3 1 6\\n4 3 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131060
            }
          ],
          "sent": [
            {
              "message": "3 2",
              "timestamp": 1699800131071
            }
          ],
          "distance": 6
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 3
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 3,
          "y": 2
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 2
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 6
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "14\\n3 2 6\\n4 3 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131071
            }
          ],
          "sent": [
            {
              "message": "4 2",
              "timestamp": 1699800131081
            }
          ],
          "distance": 2
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 2
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 3,
        "y": 3
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "15\\n3 2 6\\n4 2 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131081
            }
          ],
          "sent": [
            {
              "message": "3 3",
              "timestamp": 1699800131092
            }
          ],
          "distance": 5
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 2
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 3,
          "y": 3
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 1
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 5
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "16\\n3 3 6\\n4 2 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131093
            }
          ],
          "sent": [
            {
              "message": "4 1",
              "timestamp": 1699800131104
            }
          ],
          "distance": 1
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 1
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 3,
        "y": 4
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [
            {
              "message": "17\\n3 3 6\\n4 1 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131104
            }
          ],
          "sent": [
            {
              "message": "3 4",
              "timestamp": 1699800131115
            }
          ],
          "distance": 4
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [],
          "sent": [],
          "distance": 1
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 3,
          "y": 4
        },
        {
          "x": 4,
          "y": 0
        }
      ],
      "walls": [
        {
          "x": 0,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 0,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 5,
          "y": 1,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 5,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 4,
          "y": 0,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        6,
        9
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 0
      },
      "bots": [
        {
          "id": "e869aa89fb760fd621e6a7f9",
          "index": 0,
          "received": [],
          "sent": [],
          "distance": 4
        },
        {
          "id": "e1c2d3a5fc5309de6595067b",
          "index": 1,
          "received": [
            {
              "message": "18\\n3 4 6\\n4 1 9\\n5\\n0 0 0 0\\n2 0 0 0\\n5 1 1 0\\n5 3 1 0\\n4 0 1 1\\n",
              "timestamp": 1699800131115
            }
          ],
          "sent": [
            {
              "message": "4 0",
              "timestamp": 1699800131125
            }
          ],
          "distance": 0
        }
      ]
    }
  ]
}
`;
