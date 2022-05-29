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

INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (1, 'tierClicker', 'autoclicker', 'hand.png', 0, 40, 1, 1.15, 'Un curseur qui clique tout seul. En plus on le voit faire. C''est pas formidable, ça ?');
INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (2, 'tierTree', 'bananier', 'leaf.png', 0, 200, 7, 1.15, 'Un bananier qui en a vu d''autres, mais somme toute assez classique. Avec un sacré rendement tout de même.');
INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (3, 'tierGorilla', 'gorille', 'gorilla.png', 0, 1200, 47, 1.15, 'Un gorille qui produit des bananes. Comment ? Pourquoi ? Écoutez je n''en sais rien, il le fait et puis c''est tout.');
INSERT INTO bananaclicker.clickers (id, name, display_name, img, owned, price, multiplier, price_multiplier, description) VALUES (4, 'tierMacaque', 'macaque', 'macaque.png', 0, 11000, 260, 1.15, 'Un macaque qui fait à peu près la même chose que le gorille, mais de façon remarquablement plus efficace.');
