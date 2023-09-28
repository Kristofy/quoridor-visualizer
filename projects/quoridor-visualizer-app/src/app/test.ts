export const jsonstring = `
{
  "init": {
    "players": [
      {
        "id": 0,
        "name": "0"
      },
      {
        "id": 1,
        "name": "1"
      }
    ],
    "board": {
      "rows": 9,
      "cols": 9
    },
    "numOfWalls": 19
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
          "id": 0,
          "received": [
            {
              "message": "START",
              "timestamp": 1695877084822
            },
            {
              "message": "2\\n0\\n9 9\\n4 0 10\\n4 8 10",
              "timestamp": 1695877084883
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1695877084852
            }
          ]
        },
        {
          "id": 1,
          "received": [
            {
              "message": "START",
              "timestamp": 1695877084852
            },
            {
              "message": "2\\n1\\n9 9\\n4 0 10\\n4 8 10",
              "timestamp": 1695877084883
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1695877084883
            }
          ]
        }
      ]
    },
    {
      "currentPlayer": 0,
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
          "id": 0,
          "received": [
            {
              "message": "1\\n4 0 10\\n4 8 10\\n0\\n",
              "timestamp": 1695877084884
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877084914
            }
          ]
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 0
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
        "type": "move",
        "x": 4,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "2\\n4 0 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877084917
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877084947
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
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
        "type": "move",
        "x": 5,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "3\\n4 0 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877084948
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877084979
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
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
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "4\\n5 0 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877084979
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085009
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
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
        "x": 6,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "5\\n5 0 9\\n4 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085010
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085039
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
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
        "type": "move",
        "x": 4,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "6\\n6 0 9\\n4 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085040
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085070
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
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
        "type": "move",
        "x": 5,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "7\\n6 0 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085071
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085101
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
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
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "8\\n5 0 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085102
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085133
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
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
        "x": 6,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "9\\n5 0 9\\n4 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085133
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085163
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
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
        "type": "move",
        "x": 4,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "10\\n6 0 9\\n4 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085164
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085194
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
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
        "type": "move",
        "x": 6,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "11\\n6 0 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085195
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085225
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 4,
          "y": 8
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
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "12\\n6 1 9\\n4 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085226
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085256
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 4,
          "y": 8
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
        "x": 6,
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "13\\n6 1 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085257
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085287
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 5,
          "y": 8
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
        "x": 5,
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "14\\n6 2 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085288
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085317
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
          "y": 8
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
        "x": 6,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "15\\n6 2 9\\n5 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085317
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085348
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 3
        },
        {
          "x": 5,
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
        "type": "move",
        "x": 5,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "16\\n6 3 9\\n5 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085348
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085378
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
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
        "type": "move",
        "x": 5,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "17\\n6 3 9\\n5 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085379
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085409
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "18\\n5 3 9\\n5 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085410
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085440
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 4
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "19\\n5 3 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085441
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085470
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 4
        },
        {
          "x": 6,
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
        "x": 6,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "20\\n5 4 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085470
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085501
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 6,
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
        "x": 5,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "21\\n5 4 9\\n6 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085501
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085531
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 3
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "22\\n5 3 9\\n6 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085532
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085561
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "23\\n5 3 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085561
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085592
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 2
        },
        {
          "x": 5,
          "y": 5
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
        "x": 5,
        "y": 5
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "24\\n5 2 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085592
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085622
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 5
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
        "x": 5,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "25\\n5 2 9\\n5 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085623
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085653
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
          "y": 5
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
        "x": 6,
        "y": 5
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "26\\n5 1 9\\n5 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085654
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085684
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 5
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
        "x": 6,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "27\\n5 1 9\\n6 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085685
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085714
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 4
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
        "x": 6,
        "y": 4
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "28\\n6 1 9\\n6 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085714
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085745
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 4
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
        "x": 6,
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "29\\n6 1 9\\n6 4 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085745
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085776
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 2
        },
        {
          "x": 6,
          "y": 5
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
        "x": 6,
        "y": 5
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "30\\n6 2 9\\n6 4 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085776
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085806
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
          "y": 5
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
        "x": 6,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "31\\n6 2 9\\n6 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085807
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085837
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 1
        },
        {
          "x": 6,
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
        "x": 6,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "32\\n6 1 9\\n6 5 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085837
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085867
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 6,
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
        "x": 5,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "33\\n6 1 9\\n6 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085868
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085898
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "34\\n5 1 9\\n6 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085898
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085929
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
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
        "x": 5,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "35\\n5 1 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085929
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877085959
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
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
        "type": "move",
        "x": 5,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "36\\n5 0 9\\n5 6 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085960
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877085989
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
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
        "type": "move",
        "x": 5,
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "37\\n5 0 9\\n5 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877085989
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086019
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 1
        },
        {
          "x": 5,
          "y": 8
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
        "x": 5,
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "38\\n5 1 9\\n5 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086020
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086050
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 5,
          "y": 8
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
        "x": 5,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "39\\n5 1 9\\n5 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086051
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086081
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 4,
          "y": 8
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
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "40\\n5 0 9\\n5 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086081
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086112
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 4,
          "y": 8
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
        "x": 6,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "41\\n5 0 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086112
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086142
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 6,
          "y": 0
        },
        {
          "x": 3,
          "y": 8
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
        "x": 3,
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "42\\n6 0 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086142
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086173
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 3,
          "y": 8
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
        "x": 5,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "43\\n6 0 9\\n3 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086173
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086203
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 5,
          "y": 0
        },
        {
          "x": 3,
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
        "type": "move",
        "x": 3,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "44\\n5 0 9\\n3 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086204
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086233
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
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
        "type": "move",
        "x": 4,
        "y": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "45\\n5 0 9\\n3 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086233
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086264
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 0
        },
        {
          "x": 3,
          "y": 8
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
        "x": 3,
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "46\\n4 0 9\\n3 7 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086264
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086294
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
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
          "x": 3,
          "y": 8
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
        "y": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "47\\n4 0 9\\n3 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086294
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086325
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
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
          "y": 8
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
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "48\\n4 1 9\\n3 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086325
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086355
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 4,
          "y": 2
        },
        {
          "x": 4,
          "y": 8
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
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "49\\n4 1 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086355
            }
          ],
          "sent": [
            {
              "message": "0 0 0",
              "timestamp": 1695877086386
            }
          ],
          "commandError": "Invalid input! Reason: The new (horizontal) wall intersects a previous (horizontal) wall."
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    },
    {
      "currentPlayer": 1,
      "pawnPos": [
        {
          "x": 4,
          "y": 2
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
        "type": "move",
        "x": 4,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "50\\n4 2 9\\n4 8 10\\n1\\n0 0 0 0\\n",
              "timestamp": 1695877086386
            }
          ],
          "sent": [
            {
              "message": "0 0 1",
              "timestamp": 1695877086416
            }
          ],
          "commandError": "Invalid input! Reason: The new (vertical) wall intersects a previous (horizontal) wall."
        }
      ]
    }
  ]
}
`;
