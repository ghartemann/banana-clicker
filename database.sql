drop table if exists clickers;
create table clickers
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    article          varchar(3)  null,
    display_name     varchar(50) null,
    img              varchar(50) null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null,
    description      text        null
);

insert into clickers (id, name, article, display_name, img, price, multiplier, price_multiplier, description)
values  (1, 'tierClicker', 'un', 'autoclicker', 'hand.png', 40, 1, 1.15, 'Un curseur qui clique tout seul. En plus on le voit faire. C''est pas formidable, ça ?'),
        (2, 'tierTree', 'un', 'bananier', 'leaf.png', 200, 2, 1.15, 'Un bananier qui en a vu d''autres, mais finalement assez banal. Avec un sacré rendement tout de même.'),
        (3, 'tierMacaque', 'un', 'macaque', 'macaque.png', 2200, 10, 1.15, 'Un macaque qui produit des bananes. Comment ? Pourquoi ? Écoutez je n''en sais rien, il le fait et puis c''est tout.'),
        (4, 'tierGorilla', 'un', 'gorille', 'gorilla.png', 11000, 40, 1.15, 'Un gorille qui fait à peu près la même chose que le macaque, mais de façon remarquablement plus efficace.'),
        (5, 'tierPlantation', 'une', 'bananeraie', 'plantation.png', 40000, 100, 1.16, 'Une bananeraie composée d''un certain nombre de bananiers. Et qui donc, de façon assez logique, produit beaucoup plus de bananes. Pourquoi en acheter un quand on peut en acheter toute une collection ? Vous faites bien ce que vous voulez, mais c''est clairement plus avantageux.'),
        (6, 'tierToucan', 'un', 'toucan muet', 'toucan.png', 150000, 300, 1.16, 'Ce toucan ne parle pas, ce qui le rend beaucoup plus agréable qu''un autre qui parlerait. Il effectue ses tâches avec beaucoup de sérieux et de concentration et, pour tout vous dire, on apprécie.'),
        (7, 'tierSloth', 'un', 'paresseux', 'sloth.png', 290000, 500, 1.16, 'Un paresseux qui, paradoxalement, ramasse des bananes avec une rapidité déconcertante. C''est assez peu logique mais que voulez-vous, il faut bien trouver des idées dans le thème.'),
        (8, 'tierRifle', 'un', 'fusil', 'rifle.png', 1000000, 1776, 1.17, 'Un fusil. Pour chasser les bananes sauvages. Ça paraît assez évident.'),
        (9, 'tierBoat', 'un', 'gros bateau', 'boat.png', 2000000, 2500, 1.19, 'Un bateau qui transporte des bananes, pourquoi pas. Mais si on suit le fil rouge de nos achats précédents, est-ce que ce bateau ne devrait pas lui-même produire des bananes ? Ce jeu commence à prendre de grosses libertés vis-à-vis du lore, c''est assez irritant.'),
        (10, 'tierPlane', 'un', 'avion cargo', 'airplane.png', 3000000, 3500, 1.19, 'Allez c''est bon c''est n''importe quoi, l''avion produit des bananes maintenant. Bon écoutez on va jouer le jeu et faire comme si de rien n''était, hein ?');



drop table if exists buffsBPC;
create table buffsBPC
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    display_name     varchar(50) null,
    img              varchar(50) null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null,
    description      text        null
);

INSERT INTO buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description) VALUES (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 100, 1, 1.19, 'Votre curseur mais en mieux afin de cliquer toujours plus efficacement.');
INSERT INTO buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description) VALUES (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 10000, 10, 1.19, 'Votre curseur mais en vraiment, vraiment mieux. Y a pas à dire, ça fait toute la différence.');



drop table if exists buffsBPS;
create table buffsBPS
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    display_name     varchar(50) not null,
    img              varchar(50) not null,
    type             varchar(3)  not null,
    price            int         not null,
    multiplier       float       not null,
    price_multiplier float       not null,
    `modifies`       varchar(50) null,
    modifies_name    varchar(50) null,
    description      text        not null
);

insert into buffsBPS (id, name, display_name, img, type, price, multiplier, price_multiplier, `modifies`, modifies_name, description)
values  (1, 'buffFertilizer', 'Sac d''engrais Monsanto', 'fertilizer.png', 'BPS', 2000, 1.3, 1.15, 'Tree', 'bananier', 'Du bon engrais Monsanto chargé de pesticides pour rendre vos bananiers plus grands, plus forts, plus productifs et plus intelligents. Le parfait outil si les risques de cancer des intestins vous importent peu.'),
        (2, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 'BPS', 33333, 1.1, 1.15, 'Gorilla', 'gorille', 'Les gorilles c''est bien, mais les robots-gorilles c''est mieux. Les progrès remarquables en matière de bioingéniérie et de robotisation vous permettent de rendre vos gorilles encore plus efficaces.'),
        (3, 'buffBulldozer', 'Déforestation massive', 'bulldozer.png', 'BPS', 85000, 1.1, 1.15, 'Plantation', 'bananeraie', 'Arracher des arbres centenaires et les remplacer par des bananiers. Sur des kilomètres carrés. Vous voulez des bananes ou sauver la planète ? Alors.'),
        (4, 'buffMegaphone', 'Réveiller les paresseux', 'megaphone.png', 'BPS', 1000000, 1.15, 1.15, 'Sloth', 'paresseux', 'Ils sont productifs, certes, mais il ne faut quand même pas exagérer. Un bon cri dans ce mégaphone dernier cri (!!) saura mettre au travail cette masse salariale trop peu efficace.');