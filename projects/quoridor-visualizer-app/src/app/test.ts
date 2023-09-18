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
    "numOfWalls": 7
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
              "timestamp": 1694994226444
            },
            {
              "message": "2\\n0\\n9 9\\n4 0 10\\n4 8 10",
              "timestamp": 1694994226513
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1694994226479
            }
          ]
        },
        {
          "id": 1,
          "received": [
            {
              "message": "START",
              "timestamp": 1694994226480
            },
            {
              "message": "2\\n1\\n9 9\\n4 0 10\\n4 8 10",
              "timestamp": 1694994226514
            }
          ],
          "sent": [
            {
              "message": "OK",
              "timestamp": 1694994226511
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
          "id": 0,
          "received": [
            {
              "message": "1\\n4 0 10\\n4 8 10\\n0\\n",
              "timestamp": 1694994226516
            }
          ],
          "sent": [
            {
              "message": "4 1",
              "timestamp": 1694994226547
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
          "id": 0,
          "received": [],
          "sent": []
        },
        {
          "id": 1,
          "received": [
            {
              "message": "2\\n4 1 10\\n4 8 10\\n0\\n",
              "timestamp": 1694994226551
            }
          ],
          "sent": [
            {
              "message": "4 7",
              "timestamp": 1694994226582
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
          "y": 2
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
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "3\\n4 1 10\\n4 7 10\\n0\\n",
              "timestamp": 1694994226584
            }
          ],
          "sent": [
            {
              "message": "4 2",
              "timestamp": 1694994226615
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
          "y": 2
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        9
      ],
      "action": {
        "type": "place",
        "x": 4,
        "y": 3,
        "isVertical": 0
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
              "message": "4\\n4 2 10\\n4 7 10\\n0\\n",
              "timestamp": 1694994226617
            }
          ],
          "sent": [
            {
              "message": "4 3 0",
              "timestamp": 1694994226647
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
          "y": 3
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        9
      ],
      "action": {
        "type": "move",
        "x": 4,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "5\\n4 2 10\\n4 7 9\\n1\\n4 3 0 1\\n",
              "timestamp": 1694994226651
            }
          ],
          "sent": [
            {
              "message": "4 3",
              "timestamp": 1694994226682
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
          "y": 3
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        8
      ],
      "action": {
        "type": "place",
        "x": 3,
        "y": 3,
        "isVertical": 1
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
              "message": "6\\n4 3 10\\n4 7 9\\n1\\n4 3 0 1\\n",
              "timestamp": 1694994226683
            }
          ],
          "sent": [
            {
              "message": "3 3 1",
              "timestamp": 1694994226713
            }
          ]
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
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        8
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
              "message": "7\\n4 3 10\\n4 7 8\\n2\\n4 3 0 1\\n3 3 1 1\\n",
              "timestamp": 1694994226715
            }
          ],
          "sent": [
            {
              "message": "5 3",
              "timestamp": 1694994226746
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
          "x": 5,
          "y": 3
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        7
      ],
      "action": {
        "type": "place",
        "x": 6,
        "y": 3,
        "isVertical": 0
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
              "message": "8\\n5 3 10\\n4 7 8\\n2\\n4 3 0 1\\n3 3 1 1\\n",
              "timestamp": 1694994226747
            }
          ],
          "sent": [
            {
              "message": "6 3 0",
              "timestamp": 1694994226777
            }
          ]
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
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        7
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
              "message": "9\\n5 3 10\\n4 7 7\\n3\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n",
              "timestamp": 1694994226779
            }
          ],
          "sent": [
            {
              "message": "6 3",
              "timestamp": 1694994226810
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
          "x": 6,
          "y": 3
        },
        {
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        }
      ],
      "ownedWalls": [
        10,
        6
      ],
      "action": {
        "type": "place",
        "x": 7,
        "y": 3,
        "isVertical": 1
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
              "message": "10\\n6 3 10\\n4 7 7\\n3\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n",
              "timestamp": 1694994226814
            }
          ],
          "sent": [
            {
              "message": "7 3 1",
              "timestamp": 1694994226845
            }
          ]
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
          "x": 4,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        9,
        6
      ],
      "action": {
        "type": "place",
        "x": 4,
        "y": 6,
        "isVertical": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "11\\n6 3 10\\n4 7 6\\n4\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n",
              "timestamp": 1694994226846
            }
          ],
          "sent": [
            {
              "message": "4 6 0",
              "timestamp": 1694994226877
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
          "x": 6,
          "y": 3
        },
        {
          "x": 3,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        9,
        6
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
              "message": "12\\n6 3 9\\n4 7 6\\n5\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n",
              "timestamp": 1694994226878
            }
          ],
          "sent": [
            {
              "message": "3 7",
              "timestamp": 1694994226909
            }
          ]
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
          "x": 3,
          "y": 7
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        8,
        6
      ],
      "action": {
        "type": "place",
        "x": 3,
        "y": 6,
        "isVertical": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "13\\n6 3 9\\n3 7 6\\n5\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n",
              "timestamp": 1694994226910
            }
          ],
          "sent": [
            {
              "message": "3 6 1",
              "timestamp": 1694994226941
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
          "x": 6,
          "y": 3
        },
        {
          "x": 3,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        8,
        6
      ],
      "action": {
        "type": "move",
        "x": 3,
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
              "message": "14\\n6 3 8\\n3 7 6\\n6\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n",
              "timestamp": 1694994226942
            }
          ],
          "sent": [
            {
              "message": "3 6",
              "timestamp": 1694994226973
            }
          ]
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
          "x": 3,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        7,
        6
      ],
      "action": {
        "type": "place",
        "x": 3,
        "y": 5,
        "isVertical": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "15\\n6 3 8\\n3 6 6\\n6\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n",
              "timestamp": 1694994226974
            }
          ],
          "sent": [
            {
              "message": "3 5 0",
              "timestamp": 1694994227005
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
          "x": 6,
          "y": 3
        },
        {
          "x": 2,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        7,
        6
      ],
      "action": {
        "type": "move",
        "x": 2,
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
              "message": "16\\n6 3 7\\n3 6 6\\n7\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n",
              "timestamp": 1694994227006
            }
          ],
          "sent": [
            {
              "message": "2 6",
              "timestamp": 1694994227037
            }
          ]
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
          "x": 2,
          "y": 6
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        6,
        6
      ],
      "action": {
        "type": "place",
        "x": 2,
        "y": 5,
        "isVertical": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "17\\n6 3 7\\n2 6 6\\n7\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n",
              "timestamp": 1694994227038
            }
          ],
          "sent": [
            {
              "message": "2 5 1",
              "timestamp": 1694994227069
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
          "x": 6,
          "y": 3
        },
        {
          "x": 2,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        6,
        6
      ],
      "action": {
        "type": "move",
        "x": 2,
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
              "message": "18\\n6 3 6\\n2 6 6\\n8\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n",
              "timestamp": 1694994227071
            }
          ],
          "sent": [
            {
              "message": "2 5",
              "timestamp": 1694994227102
            }
          ]
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
          "x": 2,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        5,
        6
      ],
      "action": {
        "type": "place",
        "x": 2,
        "y": 4,
        "isVertical": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "19\\n6 3 6\\n2 5 6\\n8\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n",
              "timestamp": 1694994227103
            }
          ],
          "sent": [
            {
              "message": "2 4 0",
              "timestamp": 1694994227134
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
          "x": 6,
          "y": 3
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        5,
        6
      ],
      "action": {
        "type": "move",
        "x": 1,
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
              "message": "20\\n6 3 5\\n2 5 6\\n9\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n",
              "timestamp": 1694994227136
            }
          ],
          "sent": [
            {
              "message": "1 5",
              "timestamp": 1694994227167
            }
          ]
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
          "x": 1,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        4,
        6
      ],
      "action": {
        "type": "place",
        "x": 1,
        "y": 4,
        "isVertical": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "21\\n6 3 5\\n1 5 6\\n9\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n",
              "timestamp": 1694994227168
            }
          ],
          "sent": [
            {
              "message": "1 4 1",
              "timestamp": 1694994227199
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
          "x": 6,
          "y": 3
        },
        {
          "x": 1,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        4,
        6
      ],
      "action": {
        "type": "move",
        "x": 1,
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
              "message": "22\\n6 3 4\\n1 5 6\\n10\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n",
              "timestamp": 1694994227200
            }
          ],
          "sent": [
            {
              "message": "1 4",
              "timestamp": 1694994227231
            }
          ]
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
          "x": 1,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        3,
        6
      ],
      "action": {
        "type": "place",
        "x": 1,
        "y": 3,
        "isVertical": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "23\\n6 3 4\\n1 4 6\\n10\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n",
              "timestamp": 1694994227232
            }
          ],
          "sent": [
            {
              "message": "1 3 0",
              "timestamp": 1694994227263
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
          "x": 6,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        3,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "24\\n6 3 3\\n1 4 6\\n11\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n",
              "timestamp": 1694994227264
            }
          ],
          "sent": [
            {
              "message": "0 4",
              "timestamp": 1694994227295
            }
          ]
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
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        2,
        6
      ],
      "action": {
        "type": "place",
        "x": 0,
        "y": 3,
        "isVertical": 1
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "25\\n6 3 3\\n0 4 6\\n11\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n",
              "timestamp": 1694994227297
            }
          ],
          "sent": [
            {
              "message": "0 3 1",
              "timestamp": 1694994227328
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
          "x": 6,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        }
      ],
      "ownedWalls": [
        2,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
        "y": 3
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
              "message": "26\\n6 3 2\\n0 4 6\\n12\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n",
              "timestamp": 1694994227330
            }
          ],
          "sent": [
            {
              "message": "0 3",
              "timestamp": 1694994227359
            }
          ]
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
          "x": 0,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "place",
        "x": 0,
        "y": 2,
        "isVertical": 0
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "27\\n6 3 2\\n0 3 6\\n12\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n",
              "timestamp": 1694994227361
            }
          ],
          "sent": [
            {
              "message": "0 2 0",
              "timestamp": 1694994227391
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
          "x": 6,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "28\\n6 3 1\\n0 3 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227392
            }
          ],
          "sent": [
            {
              "message": "0 4",
              "timestamp": 1694994227422
            }
          ]
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 7,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 7,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "29\\n6 3 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227423
            }
          ],
          "sent": [
            {
              "message": "7 3",
              "timestamp": 1694994227454
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
          "x": 7,
          "y": 3
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
        "y": 3
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
              "message": "30\\n7 3 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227455
            }
          ],
          "sent": [
            {
              "message": "7 2 0",
              "timestamp": 1694994227486
            }
          ],
          "commandError": "Invalid input! Reason: The new wall cuts off the the only remaining path of pawn starting from top reaching the bottom side."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 7,
          "y": 2
        },
        {
          "x": 0,
          "y": 3
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 7,
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "31\\n7 3 1\\n0 3 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227488
            }
          ],
          "sent": [
            {
              "message": "7 2",
              "timestamp": 1694994227519
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
          "x": 7,
          "y": 2
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "32\\n7 2 1\\n0 3 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227519
            }
          ],
          "sent": [
            {
              "message": "8 2 1",
              "timestamp": 1694994227549
            }
          ],
          "commandError": "Invalid input! The three numbers are not in the correct interavals."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 2
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 2
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "33\\n7 2 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227550
            }
          ],
          "sent": [
            {
              "message": "8 2",
              "timestamp": 1694994227581
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
          "x": 8,
          "y": 2
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "34\\n8 2 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227582
            }
          ],
          "sent": [
            {
              "message": "8 3 1",
              "timestamp": 1694994227613
            }
          ],
          "commandError": "Invalid input! The three numbers are not in the correct interavals."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 3
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 3
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "35\\n8 2 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227614
            }
          ],
          "sent": [
            {
              "message": "8 3",
              "timestamp": 1694994227645
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
          "x": 8,
          "y": 3
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "36\\n8 3 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227646
            }
          ],
          "sent": [
            {
              "message": "8 4 1",
              "timestamp": 1694994227675
            }
          ],
          "commandError": "Invalid input! The three numbers are not in the correct interavals."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 4
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 4
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "37\\n8 3 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227676
            }
          ],
          "sent": [
            {
              "message": "8 4",
              "timestamp": 1694994227706
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
          "x": 8,
          "y": 4
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "38\\n8 4 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227707
            }
          ],
          "sent": [
            {
              "message": "8 5 1",
              "timestamp": 1694994227738
            }
          ],
          "commandError": "Invalid input! The three numbers are not in the correct interavals."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 5
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 5
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "39\\n8 4 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227739
            }
          ],
          "sent": [
            {
              "message": "8 5",
              "timestamp": 1694994227770
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
          "x": 8,
          "y": 5
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "40\\n8 5 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227771
            }
          ],
          "sent": [
            {
              "message": "8 6 1",
              "timestamp": 1694994227802
            }
          ],
          "commandError": "Invalid input! The three numbers are not in the correct interavals."
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 6
        },
        {
          "x": 0,
          "y": 4
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 6
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "41\\n8 5 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227803
            }
          ],
          "sent": [
            {
              "message": "8 6",
              "timestamp": 1694994227834
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
          "x": 8,
          "y": 6
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 0,
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
              "message": "42\\n8 6 1\\n0 4 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227835
            }
          ],
          "sent": [
            {
              "message": "0 5",
              "timestamp": 1694994227865
            }
          ]
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 7
        },
        {
          "x": 0,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 7
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "43\\n8 6 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227865
            }
          ],
          "sent": [
            {
              "message": "8 7",
              "timestamp": 1694994227895
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
          "x": 8,
          "y": 7
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 1,
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
              "message": "44\\n8 7 1\\n0 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227896
            }
          ],
          "sent": [
            {
              "message": "1 5",
              "timestamp": 1694994227927
            }
          ]
        }
      ]
    },
    {
      "currentPlayer": 0,
      "pawnPos": [
        {
          "x": 8,
          "y": 8
        },
        {
          "x": 1,
          "y": 5
        }
      ],
      "walls": [
        {
          "x": 4,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 3,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 6,
          "y": 3,
          "isVertical": 0,
          "who": 1
        },
        {
          "x": 7,
          "y": 3,
          "isVertical": 1,
          "who": 1
        },
        {
          "x": 4,
          "y": 6,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 3,
          "y": 6,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 3,
          "y": 5,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 2,
          "y": 5,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 2,
          "y": 4,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 1,
          "y": 4,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 1,
          "y": 3,
          "isVertical": 0,
          "who": 0
        },
        {
          "x": 0,
          "y": 3,
          "isVertical": 1,
          "who": 0
        },
        {
          "x": 0,
          "y": 2,
          "isVertical": 0,
          "who": 0
        }
      ],
      "ownedWalls": [
        1,
        6
      ],
      "action": {
        "type": "move",
        "x": 8,
        "y": 8
      },
      "bots": [
        {
          "id": 0,
          "received": [
            {
              "message": "45\\n8 7 1\\n1 5 6\\n13\\n4 3 0 1\\n3 3 1 1\\n6 3 0 1\\n7 3 1 1\\n4 6 0 0\\n3 6 1 0\\n3 5 0 0\\n2 5 1 0\\n2 4 0 0\\n1 4 1 0\\n1 3 0 0\\n0 3 1 0\\n0 2 0 0\\n",
              "timestamp": 1694994227928
            }
          ],
          "sent": [
            {
              "message": "8 8",
              "timestamp": 1694994227959
            }
          ]
        },
        {
          "id": 1,
          "received": [],
          "sent": []
        }
      ]
    }
  ]
}
`;