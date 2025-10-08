const temadb = require("../practica/temasdb")

function crearEnlace(temaId, titulo,url){
    temadb.prepare("INSERT INTO enlaces (tema_id,titulo, url) VALUES (?,?,?)").run(temaId,titulo, url);
}

function listarEnlaces(temaId){
    return temadb.prepare("SELECT * FROM enlaces WHERE tema_id=?").all(temaId);
}

module.exports = {crearEnlace,listarEnlaces};

