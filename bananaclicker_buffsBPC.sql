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

INSERT INTO bananaclicker.buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description) VALUES (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 100, 1, 1.19, 'Votre curseur mais en mieux afin de cliquer toujours plus efficacement.');
INSERT INTO bananaclicker.buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description) VALUES (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 10000, 10, 1.19, 'VOtre curseur mais en vraiment, vraiment mieux. Y a pas à dire, ça fait toute la différence.');
