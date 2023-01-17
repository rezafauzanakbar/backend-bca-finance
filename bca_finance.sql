-- name databse
bca_finance

-- CREATE TABEL SQL
CREATE TABLE transaksi (id serial PRIMARY KEY,nominal INTEGER,jenis VARCHAR(255),tanggal DATE)
CREATE TABLE saldo (id serial PRIMARY KEY, nama VARCHAR, saldo INTEGER)

-- RELATIONAL DB

create table saldo(
    id serial primary key,
    nama VARCHAR,
    saldo INTEGER
);

create table transaksi(
    id serial primary key,
    id_saldo integer references saldo(id) on delete cascade,
    nominal INTEGER,
    jenis VARCHAR,
    tanggal DATE
);