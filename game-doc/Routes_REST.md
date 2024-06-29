#Route REST API

## getGridList

**Verbe :**     GET 
**URI :**       game/grids
**Entrée :**    
**Retour :**    
                [ 
                    {
                        "id" : 1,
                        "level" : "easy",
                        "cells" : [ 5, 0, 0, 9, 0, 6, 0, 4, 0, 4, 1, 0, 0, 0, 0, 6, 0, 9, 0, 9, 0, 0, 1, 4, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 7, 0, 7, 0, 5, 0, 2, 0, 9, 0, 8, 0, 2, 0, 6, 0, 1, 0, 4, 0, 0, 1, 2, 0, 8, 9, 0, 0, 6, 3, 0, 0, 4, 0, 0, 5, 2 ],
                        "podiums" : [ 
                            {
                                "name" : "ines",
                                "score" : 22
                            }
                        ]
                    }, {
                        "id" : 2,
                        "level" : "easy",
                        "cells" : [ 5, 3, 9, 8, 7, 6, 4, 1, 2, 7, 2, 8, 3, 1, 4, 9, 6, 5, 6, 4, 1, 2, 9, 5, 7, 3, 8, 4, 6, 2, 5, 3, 9, 8, 7, 1, 3, 8, 5, 7, 2, 1, 6, 4, 9, 1, 9, 7, 4, 6, 8, 2, 5, 3, 2, 5, 6, 1, 8, 7, 3, 9, 4, 9, 1, 3, 6, 4, 2, 5, 8, 7, 8, 7, 4, 9, 5, 3, 1, 2, 0 ],
                        "podiums" : [ 
                            {
                                "name" : "leandre",
                                "score" : 34
                            }
                        ]
                    } 
                ]

## getGridById

**Verbe :**     GET 
**URI :**       game/grid/
**Entrée :**    game/grid/{id}
**Retour :**    {
"id" : 1,
"level" : "easy",
"cells" : [ 5, 0, 0, 9, 0, 6, 0, 4, 0, 4, 1, 0, 0, 0, 0, 6, 0, 9, 0, 9, 0, 0, 1, 4, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 7, 0, 7, 0, 5, 0, 2, 0, 9, 0, 8, 0, 2, 0, 6, 0, 1, 0, 4, 0, 0, 1, 2, 0, 8, 9, 0, 0, 6, 3, 0, 0, 4, 0, 0, 5, 2 ],
"podiums" : [
{
"name" : "ines",
"score" : 22
}
]
}


## getPodiumById

**Verbe :**     GET 
**URI :**       game/grid/podium
**Entrée :**    game/grid/podium/{id}
                 
**Retour :**    {
                    "name" : "leandre",
                    "score" : 14
                }, {
                    "name" : "ines",
                    "score" : 22
                }


## postGeneratedGrid

**Verbe :**     POST 
**URI :**       game/grid/generated
**Entrée :**   
                {
                    "id" : 1,
                    "level" : "easy",
                    "cells" : [ 5, 0, 0, 9, 0, 6, 0, 4, 0, 4, 1, 0, 0, 0, 0, 6, 0, 9, 0, 9, 0, 0, 1, 4, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 7, 0, 7, 0, 5, 0, 2, 0, 9, 0, 8, 0, 2, 0, 6, 0, 1, 0, 4, 0, 0, 1, 2, 0, 8, 9, 0, 0, 6, 3, 0, 0, 4, 0, 0, 5, 2 ],
                    "podiums" : []
                }
**Retour :**    {
                    "id" : 1,
                    "level" : "easy",
                    "cells" : [ 5, 0, 0, 9, 0, 6, 0, 4, 0, 4, 1, 0, 0, 0, 0, 6, 0, 9, 0, 9, 0, 0, 1, 4, 0, 2, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 7, 0, 7, 0, 5, 0, 2, 0, 9, 0, 8, 0, 2, 0, 6, 0, 1, 0, 4, 0, 0, 1, 2, 0, 8, 9, 0, 0, 6, 3, 0, 0, 4, 0, 0, 5, 2 ],
                    "podiums" : []
                }


## postScore

**Verbe :**     POST 
**URI :**       game/grid/podium
**Entrée :**    game/grid/podium/{id}/{name}/{score}
**Retour :**    {
"name" : "ines",
"score" : 22
}