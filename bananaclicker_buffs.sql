create table buffs
(
    id               int auto_increment
        primary key,
    name             varchar(50) null,
    display_name     varchar(50) null,
    type             varchar(50) null,
    img              varchar(50) null,
    owned            int         null,
    price            int         null,
    multiplier       float       null,
    price_multiplier float       null,
    `modifies`       varchar(50) null,
    modifies_name    varchar(50) null
);

INSERT INTO bananaclicker.buffs (id, name, display_name, type, img, owned, price, multiplier, price_multiplier, `modifies`, modifies_name) VALUES (1, 'buffCursor', 'Améliorer votre curseur', 'BPC', 'cursor.png', 0, 100, 1, 1.31, null, null);
INSERT INTO bananaclicker.buffs (id, name, display_name, type, img, owned, price, multiplier, price_multiplier, `modifies`, modifies_name) VALUES (2, 'buffCPU', 'Robotiser les gorilles', 'BPS', 'cpu.png', 0, 3333, 5, 1.64, 'tierGorilla', ' / gorille');
