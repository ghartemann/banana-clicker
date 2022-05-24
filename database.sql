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
);

insert into bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, desc)
values  (1, 'tierClicker', 'autoclicker', 'hand.png', 0, 50, 1, 1.16, 'Un curseur qui clique tout seul. C''est pas formidable, ça ?'),
        (2, 'tierTree', 'bananier', 'leaf.png', 0, 510, 11, 1.26, 'Un bananier tout ce qu''il y a de plus classique. Avec un sacré rendement tout de même.'),
        (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1420, 79, 1.3, 'Un gorille qui produit des bananes. Comment ? Pourquoi ? Ne me demandez pas.'),
        (4, 'tierMacaque', 'macaque', 'macaque.png', 0, 3800, 166, 1.4, 'Un macaque qui fait à peu près la même chose que le gorille, mais beaucoup plus efficacement.');



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
    auto_increment = 3;

insert into buffsBPC (id, name, display_name, img, owned, price, multiplier, price_multiplier)
values  (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 0, 100, 1, 1.31),
        (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 0, 10000, 10, 1.21);



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
);

insert into buffsBPS (id, name, display_name, img, owned, price, multiplier, price_multiplier, modifies, modifies_name)
values  (1, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 0, 3333, 5, 1.34, 'Gorilla', 'gorille');
