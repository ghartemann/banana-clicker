drop table if exists clickers;
create table clickers
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    article          varchar(3)  null,
    display_name     varchar(50) null,
    img              varchar(50) null,
    owned            int         null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null,
    description      text        null
);

INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (1, 'tierClicker', 'un', 'autoclicker', 'hand.png', 0, 40, 1, 1.15, 'Un curseur qui clique tout seul. En plus on le voit faire. C''est pas formidable, ça ?');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (2, 'tierTree', 'un', 'bananier', 'leaf.png', 0, 200, 7, 1.15, 'Un bananier qui en a vu d''autres, mais somme toute assez classique. Avec un sacré rendement tout de même.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (3, 'tierGorilla', 'un', 'gorille', 'gorilla.png', 0, 1200, 47, 1.15, 'Un gorille qui produit des bananes. Comment ? Pourquoi ? Écoutez je n''en sais rien, il le fait et puis c''est tout.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (4, 'tierMacaque', 'un', 'macaque', 'macaque.png', 0, 11000, 260, 1.15, 'Un macaque qui fait à peu près la même chose que le gorille, mais de façon remarquablement plus efficace.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (5, 'tierPlantation', 'une', 'bananeraie', 'plantation.png', 0, 45000, 400, 1.18, 'Une bananeraie qui contient un certain nombre de bananiers. Pourquoi en acheter un quand on peut en acheter toute une collection ? Vous faites bien ce que vous voulez, mais c''est clairement plus avantageux.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (6, 'tierBoat', 'un', 'gros bateau', 'boat.png', 0, 120000, 600, 1.19, 'Un bateau qui transporte des bananes, pourquoi pas. Mais est-ce que le bateau produit des bananes ? Ce jeu commence à prendre de grosses libertés vis-à-vis du lore.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (7, 'tierPlane', 'un', 'avion cargo', 'airplane.png', 0, 350000, 999, 1.19, 'Allez c''est bon c''est n''importe quoi, l''avion produit des bananes maintenant. Bon écoutez on va jouer le jeu et faire comme si de rien n''était, hein ?');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (8, 'tierToucan', 'un', 'toucan muet', 'toucan.png', 0, 700400, 1300, 1.18, 'Ce toucan ne parle pas, ce qui le rend beaucoup plus agréable. Il effectue des tâches avec beaucoup de sérieux et de concentration.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (9, 'tierSloth', 'un', 'paresseux', 'sloth.png', 0, 1000000, 2400, 1.17, 'Un paresseux qui, paradoxalement, ramasse des bananes avec une rapidité déconcertante. C''est assez peu logique mais que voulez-vous, il faut bien trouver des idées dans le thème.');
INSERT INTO clickers (id, name, article, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (10, 'tierRifle', 'un', 'fusil', 'rifle.png', 0, 1500000, 3333, 1.17, 'Un fusil. Pour chasser les bananes sauvages. Je sais pas.');



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
INSERT INTO buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description) VALUES (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 10000, 10, 1.19, 'VOtre curseur mais en vraiment, vraiment mieux. Y a pas à dire, ça fait toute la différence.');



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

INSERT INTO buffsBPS (id, name, display_name, img, type, price, multiplier, price_multiplier, `modifies`, modifies_name, description) VALUES (1, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 'BPS', 3333, 1.1, 1.15, 'Gorilla', 'gorille', 'Les gorilles c''est bien, mais les robots-gorilles c''est mieux. Les progrès remarquables en matière de bioingéniérie et de robotisation vous permettent de rendre vos gorilles encore plus efficaces.');
