# User Stories

## 1 - ENREGISTREMENT - NOM JOUEUR

En tant que joueur, 

je veux pouvoir donner mon nom,

afin d’enregistrer ma partie.

Acceptance criteria : Avant de commencer une partie, une zone de texte sera prévu sur la page d'acceuil en haut pour entrer son nom.

## 2 - DIFFICULTÉ

En tant que joueur, 

je veux pouvoir sélectionner la difficulté du sudoku (easy, medium, hard, very-hard insane, inhuman), 

afin de choisir la difficulté du sudoku.

Acceptance criteria : Une liste defilante permettra de choisir le niveau de difficulté de la grille sur l'écran d'acceuil, juste au dessus de la grille de présentation.

## 3 - GÉNÉRER GRILLE

En tant que joueur,

je veux pouvoir générer une grille random,

afin de démarrer le jeu et pouvoir le remplir après.

Acceptance criteria : Un bouton "generate random board" juste au dessus de la grille de présentation sur l'écran d'acceuil permettra de générer une grille aléatoire.

## 4 - GÉNÉRER ANCIENNES GRILLES

En tant que joueur, 

je veux pouvoir regénérer une ancienne grille avec le niveau de difficulté afficher déjà terminée, 

afin de jouer la même grille.

Acceptance criteria : Sur l'écran d'acceuil sera affiché l'historique des anciennes parties, en cliquant sur l'une d'entre elle, il sera possible de générer a nouveau la grille grâce au bouton "Generate again" qui sera au dessus de la grille dans l'historique.

## 5 - MODE SUGGESTION

En tant que joueur, 

je veux avoir la possibilité d’avoir des suggestion, 

afin de m’aider à résoudre une grille.

Acceptance criteria : Le mode suggestion sera accessible grâce à une puce à cocher sur l'écran d'acceuil.

## 6 - SELECTION CHIFFRE DANS GRILLE

En tant que joueur, 

je veux pouvoir sélectionner un chiffre en cliquant gauche sur un case, 

afin de pouvoir remplir la grille.

Acceptance criteria : Après avoir cliquer sur une case de la grille, une liste défilante permettra de choisir le chiffre que l'on souhaite.

## 7 - HISTORIQUE

En tant que joueur, 

je veux avoir un historique de mes coups, 

afin d’avoir la possibilité d’annuler mon coups et de le rejouer.

Acceptance criteria : Pendant une partie l'historique des coups sera affiché et mis à jour sur la gauche de la grille.


## 8 - NOMBRE DE COUPS

En tant que joueur, 

je veux voir mon nombre de coup ( le score ) actuel sur la droite de la grille, 

afin de pouvoir suivre mon avancé dans le jeu.

Acceptance criteria : Pendant une partie, le nombre de coup sera affiché et mis à jour sur la droite de la grille.

## 9 - MAUVAIS COUP

En tant que joueur, 

je veux que lors d’un mauvais coup les cases posant problème soient affichées en rouge, 

afin de pouvoir le corriger.

Acceptance criteria : Dans l'historique des coups, pour un mauvais coup joué dans une grille, sa case sera affichée en rouge ainsi que les cases prouvant le problème.

Dans la grille centrale, la case posant un problème sera également mise en rouge ainsi que les cases posant problème.

## 10 - HISTORIQUE ACTUEL GRIS

En tant que joueur, 

je veux que l’historique actuel soit en gris, 

afin de pouvoir situer mon coup.

Acceptance criteria : Dans l'historique, la dernière grille sera affiché en gris.

## 11 - COUP RISQUÉ VIOLET

En tant que joueur, 

je veux que les grilles de l’historique soient en violet lors d’un coup risqué, 

afin de pouvoir situer mon coup risqué et y retourner rapidement.

Acceptance criteria : Dans l'historique des coups, après un coup risqué, la grille sera affichée en violet, même s'il vient d'être joué (priorité sur le gris).

## 12 - COUP PRÉCÉDENT

En tant que joueur, 

je veux pouvoir retourner sur un coup précédent dans l’historique, 

afin de pouvoir jouer un autre coup.

Acceptance criteria : Dans l'historique des coups, un clique gauche sur un coup antérieur permettra de revenir sur celui ci et de rejouer ce coup. 

## 13 - ARBRE DES COUPS

En tant que joueur, 

je veux que lorsque je joue un nouveau coup qui corrige un précédent le nouveau coup s’affiche en parallèle, 

afin de voir l’arbre des coups.

Acceptance criteria : Lorsqu'un coup est rejoué, l'historique des coups se scindera en deux, laissant apparaître l'arbre des coups joués.

## 14 - NOM JOUEUR PARTIE EN COURS

En tant que joueur,

je veux que mon nom soit afficher sur la partie en cours,

afin de savoir si je suis sur la bonne partie.

Acceptance criteria : Pendant une partie, le nom du joueur sera affiché à droite de la grille.

## 15 - CHIFFRES VERTS

En tant que joueur, 

je veux que les chiffres que j’ai ajoutés soit affichés en vert dans les grilles de l’historique, 

afin de voir rapidement ce que j’ai pu jouer dans les grilles précédentes.

Acceptance criteria : Dans l'historique des coups, le coup joué dans chaque grille sera affiché en vert.

## 16 - CLASSEMENT 

En tant que joueur, 

je veux avoir le classement de la grille sur laquelle je suis en train de jouer avec le rang, le nom joueur et le score des autres parties accessible à tout moment de ma partie en haut à droite,

afin de pouvoir regarder les classements des autres parties sur cette même grille.

Acceptance criteria : Pendant une partie, le classement actuel sur cette grille sera affichable en cliquant sur un bouton à droite de la grille au-dessus du nom du joueur.

## 17 - SUGGESTION AUTO

En tant que joueur, 

je veux que lors d’un clique droit la première suggestion soit automatique mise dans la case, 

afin de proposer un mode suggestion et aller plus vite.

Acceptance criteria : Pendant une partie, la case pourra être remplie automatiquement par la première suggestion à l'aide d'un clic droit.

## 18 - FIN DE JEU

En tant que joueur, 

je veux que lorsque je termine une partie, le jeu affiche “End Game" + Nom et mon score et me propose de retourner au menu, 

afin de pouvoir retourner au menu.

Acceptance criteria : A la fin d'une partie, le teste "End Game" + Nom + Score sera affiché au milieu de l'écran. 

## 19 - MODE SUGGESTION ACTIF - SUGGESTIONS CASES

En tant que joueur, 

je veux dans le mode suggestion, que les suggestions par cases soient affichées directement en gris dans la case en haut à droite. 

afin de voir plus facilement les suggestions.

Acceptance criteria : Lorsque le mode suggestion est actif pendant une partie, les cases à remplir seront prérempli avec les chiffres recommandés en gris clair dans le coin haut gauche de la case.

## 20 - UNDO

En tant que joueur, 

je veux avoir un bouton undo, 

afin de pouvoir annuler une action sans dépenser un coup.

Acceptance criteria : Pendant une partie, il sera possible d'annuler un coup en cliquant sur le bouton "Undo" à droite de la grille sur le haut de l'écran.

## 21 - REDO

En tant que joueur, 

je veux avoir un bouton redo, 

afin de pouvoir refaire une action défaite sans perdre un coup (annuler un redo).

Acceptance criteria : Pendant une partie, il sera possible d'annuler un coup annulé en cliquant sur le bouton "Redo" sur la droite du bouton "Undo".

