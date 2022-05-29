drop table if exists clickers;
create table clickers
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    display_name     varchar(50) null,
    img              varchar(50) null,
    owned            int         null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null,
    description      text        null
);

INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (1, 'tierClicker', 'autoclicker', 'hand.png', 0, 40, 1, 1.15, 'Un curseur qui clique tout seul. En plus on le voit faire. C''est pas formidable, ça ?');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (2, 'tierTree', 'bananier', 'leaf.png', 0, 200, 7, 1.15, 'Un bananier qui en a vu d''autres, mais somme toute assez classique. Avec un sacré rendement tout de même.');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1200, 47, 1.15, 'Un gorille qui produit des bananes. Comment ? Pourquoi ? Écoutez je n''en sais rien, il le fait et puis c''est tout.');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (4, 'tierMacaque', 'macaque', 'macaque.png', 0, 11000, 260, 1.15, 'Un macaque qui fait à peu près la même chose que le gorille, mais de façon remarquablement plus efficace.');



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
