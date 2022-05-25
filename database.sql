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
    `desc`           text        null
)
    auto_increment = 5;

INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, `desc`) VALUES (1, 'tierClicker', 'autoclicker', 'hand.png', 0, 40, 1, 1.15, 'Un curseur qui clique tout seul. C''est pas formidable, ça ?');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, `desc`) VALUES (2, 'tierTree', 'bananier', 'leaf.png', 0, 200, 7, 1.15, 'Un bananier tout ce qu''il y a de plus classique. Avec un sacré rendement tout de même.');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, `desc`) VALUES (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1200, 47, 1.15, 'Un gorille qui produit des bananes. Comment ? Pourquoi ? Ne me demandez pas.');
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, `desc`) VALUES (4, 'tierMacaque', 'macaque', 'macaque.png', 0, 11000, 260, 1.15, 'Un macaque qui fait à peu près la même chose que le gorille, mais beaucoup plus efficacement.');




drop table if exists buffsBPC;
create table buffsBPC
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    display_name     varchar(50) null,
    img              varchar(50) null,
    owned            int         null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null
)
    auto_increment = 4;

INSERT INTO buffsBPC (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 0, 100, 1, 1.19);
INSERT INTO buffsBPC (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 0, 10000, 10, 1.19);




drop table if exists buffsBPS;
create table buffsBPS
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
    `modifies`       varchar(50) null,
    modifies_name    varchar(50) null
)
    auto_increment = 2;

INSERT INTO buffsBPS (id, name, display_name, img, owned, price, multiplier, price_multiplier, `modifies`, modifies_name) VALUES (1, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 0, 3333, 1.1, 1.15, 'Gorilla', 'gorille');

