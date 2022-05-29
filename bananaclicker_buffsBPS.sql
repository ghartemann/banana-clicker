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

INSERT INTO bananaclicker.buffsBPS (id, name, display_name, img, type, price, multiplier, price_multiplier, `modifies`, modifies_name, description) VALUES (1, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 'BPS', 3333, 1.1, 1.15, 'Gorilla', 'gorille', 'Les gorilles c''est bien, mais les robots-gorilles c''est mieux. On vous propose profiter de cette remarquable transformation pour une somme assez réduite.');
