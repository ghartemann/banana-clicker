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
    price_multiplier float       null
);

INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (1, 'tierClicker', 'autoclicker', 'hand.png', 0, 30, 1, 1.3);
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (2, 'tierTree', 'bananier', 'leaf.png', 0, 500, 11, 1.6);
INSERT INTO clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1420, 79, 1.5);



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

INSERT INTO buffsBPC (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 0, 100, 1, 1.31);
INSERT INTO buffsBPC (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 0, 10000, 10, 1.37);



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

INSERT INTO buffsBPS (id, name, display_name, img, owned, price, multiplier, price_multiplier, `modifies`, modifies_name) VALUES (1, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 0, 3333, 5, 1.64, 'Gorilla', 'gorille');
