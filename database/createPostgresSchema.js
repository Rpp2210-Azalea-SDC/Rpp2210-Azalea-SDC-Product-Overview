DROP SCHEMA IF EXISTS product_schema CASCADE;

Create Schema product_schema;

CREATE TABLE product_schema.product (
  id integer PRIMARY KEY,
  name varchar,
  slogan varchar,
  description varchar,
  category varchar,
  default_price integer
);

CREATE TABLE product_schema.related (
  id integer PRIMARY KEY,
  product_id integer ,
  related_id integer,
  FOREIGN KEY (product_id) REFERENCES product (id)
);

// ALTER TABLE related
// add constraint fk_product_related FOREIGN KEY (product_id) REFERENCES product (id);

CREATE TABLE product_schema.styles (
  id integer PRIMARY KEY,
  product_id integer,
  name varchar,
  sale_price integer,
  original_price integer,
  "default?" boolean,
  FOREIGN KEY (product_id) REFERENCES product (id)
);

ALTER TABLE styles
RENAME COLUMN "default?" TO style_default;



CREATE TABLE product_schema.features (
  id integer PRIMARY KEY,
  product_id integer,
  feature varchar,
  value varchar,
    FOREIGN KEY (product_id)
    REFERENCES product (id)
);

CREATE TABLE product_schema.photos (
  id integer PRIMARY KEY,
  style_id integer,
  url varchar,
  thumbnail_url varchar,
  FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE TABLE product_schema.skus (
  id integer PRIMARY KEY,
  style_id integer,
  size varchar,
  quantity integer,
  FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE INDEX idx_product_styles on styles (product_id);
CREATE INDEX idx_product_related on related (product_id);
CREATE INDEX idx_product_features on features (product_id);
CREATE INDEX idx_styles_photos on photos (style_id);
CREATE INDEX idx_styles_skus on skus (style_id);


//imports csv when they're located in the same level as package.json
// Product:
\copy product(id, name, slogan, description, category, default_price) FROM
'/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/product.csv' DELIMITER ',' CSV HEADER;

// Style:
\copy styles(id, product_id, name, sale_price, original_price, style_default) FROM
'/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/styles.csv' DELIMITER ',' CSV HEADER;

// Features:
\copy features(id, product_id, feature, value) from '/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/features.csv' DELIMITER ',' CSV HEADER;

// Photos:
\copy photos(id, style_id, url, thumbnail_url) from '/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/photos.csv' DELIMITER ',' CSV HEADER;

// Related Items:
\copy related(id, product_id, related_id) from '/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/related.csv' DELIMITER ',' CSV HEADER;

// SKUs:
\copy skus(id, style_id, size, quantity) from '/Users/alvinruan/Desktop/HackReactor/SDC/Rpp2210-Azalea-SDC-Product-Overview/skus.csv' DELIMITER ',' CSV HEADER;
