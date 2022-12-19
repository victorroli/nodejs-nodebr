drop table if exists TB_HEROIS;

create table tb_herois (
    ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    NOME TEXT NOT NULL,
    PODER TEXT NOT NULL
)

--create
INSERT INTO tb_herois(NOME, PODER)
VALUES ('FLASH', 'Velocidade'),
        ('Aquaman', 'Falar com os animais'),
        ('Batman', 'Dinheiro')

-- As funções de read, update não foram adicionadas pois não havia necessidade