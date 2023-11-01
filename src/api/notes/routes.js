// Buat fungsi routes yang mengembalikan array
// Mengapa "fungsi" ? Bukan array langsung ?
// Karena menggunakan plugin, kita gunakan pendekatan berbeda.
// Tidak akan menggunakan fungsi" handler dari hasil impor
// Tetapi handler yang akan digunakan dimasukkan sebagai parameter

const routes = (handler) => [
  {
    method: "POST",
    path: "/notes",
    handler: handler.postNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: handler.getNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: handler.getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: handler.putNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: handler.deleteNoteByIdHandler,
  },
];

// Nama fungsi handler diambil dari Kombinasi method, lalu path, dan diakhiri dengan kata 'Handler'
// Bila di path ada parameter, bisa dikombinasikan juga sesuai dg penggunaannya

module.exports = routes;
