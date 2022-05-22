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

INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (1, 'tierClicker', 'clicker', 'hand.png', 0, 30, 1, 1.4);
INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (2, 'tierTree', 'bananier', 'leaf.png', 0, 500, 10, 1.6);
INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier) VALUES (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1400, 80, 1.5);
