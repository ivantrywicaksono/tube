CREATE TABLE kategori (
    kategori_id         SERIAL PRIMARY KEY,
    nama_kategori       varchar(50) NOT NULL
);

CREATE TABLE item (
    item_id             SERIAL PRIMARY KEY,
    kategori_id         integer REFERENCES kategori,
    nama_item           varchar(100) NOT NULL
);

CREATE TYPE transaction_type AS ENUM ('income', 'outcome');

CREATE TABLE transaksi (
    transaksi_id        SERIAL PRIMARY KEY,
    tanggal_transaksi   date NOT NULL,
    item_id             integer REFERENCES item,
    tipe_transaksi      transaction_type NOT NULL,
    harga               integer NOT NULL,
    jumlah              integer NOT NULL
);