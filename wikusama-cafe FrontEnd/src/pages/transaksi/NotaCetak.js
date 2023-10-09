import React from "react";

const NotaCetak = ({ transaksi }) => {
  return (
    <div className="nota-cetak">
      <h2>Nota Transaksi</h2>
      <p>Tanggal Transaksi: {transaksi.tgl_transaksi}</p>
      <p>Nama Pelanggan: {transaksi.nama_pelanggan}</p>
      <p>Nomor Meja: {transaksi.meja.nomor_meja}</p>
      <p>Status: {transaksi.status}</p>

      <h3>Detail Pesanan:</h3>
      <ul>
        {transaksi.detail_transaksi.map((detail, index) => (
          <li key={`detail${index}`}>
            Menu: {detail.menu.nama_menu}<br />
            Jumlah: {detail.jumlah}<br />
            Harga: {detail.harga}<br />
            Total Harga: {Number(detail.harga) * Number(detail.jumlah)}
          </li>
        ))}
      </ul>

      <p>Total: Rp {transaksi.detail_transaksi.reduce((sum, obj) => sum + obj.jumlah * obj.harga, 0)}</p>
    </div>
  );
};

export default NotaCetak;
