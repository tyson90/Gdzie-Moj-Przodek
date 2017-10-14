CREATE TABLE IF NOT EXISTS tb_graveyards (
	graveyard_id  INTEGER PRIMARY KEY,
	gy_name       TEXT NOT NULL UNIQUE,
	gy_address    TEXT NOT NULL,
	gy_cord_y     NUMBER NOT NULL,
	gy_cord_x     NUMBER NOT NULL
	);    

CREATE TABLE IF NOT EXISTS tb_graves (
	grave_id      INTEGER PRIMARY KEY,
	graveyard_id  INTEGER NOT NULL UNIQUE,
	grave_name       TEXT NOT NULL UNIQUE,
	grave_cord_y     NUMBER NOT NULL,
	grave_cord_x     NUMBER NOT NULL,
	is_popular_flag  TEXT(1) NOT NULL DEFAULT 'N',
	CHECK (is_popular_flag IN ('Y', 'N')),
  FOREIGN KEY(graveyard_id) REFERENCES tb_graveyards(graveyard_id)
	);


INSERT INTO tb_graveyards (gy_name, gy_address,	gy_cord_y, gy_cord_x)
       VALUES ('Cmentarz Powązkowski', 'Powązkowska 14, 01-797 Warszawa', 52.254398, 20.972898);

INSERT INTO tb_graveyards (gy_name, gy_address,	gy_cord_y, gy_cord_x)
       VALUES ('Cmentarz Wolski', 'Wolska 180/182, 01-258 Warszawa', 52.228686, 20.934985);

INSERT INTO tb_graveyards (gy_name, gy_address,	gy_cord_y, gy_cord_x)
       VALUES ('Cmentarz Komunalny Północny', 'Kazimierza Wóycickiego 14, 01-938 Warszawa', 52.305664, 20.906098);

INSERT INTO tb_graveyards (gy_name, gy_address,	gy_cord_y, gy_cord_x)
       VALUES ('Cmentarz Bródnowski', 'św. Wincentego 83, 03-530 Warszawa', 52.273765, 21.032430);

INSERT INTO tb_graves (graveyard_id, grave_name, grave_cord_y, grave_cord_x)
SELECT graveyard_id, 'TEST GRÓB', 52, 21 FROM tb_graveyards WHERE gy_name = 'Cmentarz Bródnowski';