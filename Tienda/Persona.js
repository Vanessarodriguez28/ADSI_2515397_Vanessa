const login = require('./Login')
class Persona extends login {
    constructor(Nit, Nombre, Usuario, Contraseña, Id, Documento, Nombres, Apellidos, Genero, Correo, Rol) {
        super(Nit, Nombre, Usuario, Contraseña)
        this._Id = Id;
        this._Documento = Documento;
        this._Nombres = Nombres;
        this._Apellidos = Apellidos;
        this._Genero = Genero;
        this._Correo = Correo;
        this._Rol = Rol;
    }
    set Id(Id) {
        this._Id = Id;
    }
    set Documento(Documento) {
        this._Documento = Documento;
    }
    set Nombres(Nombres) {
        this._Nombres = Nombres;
    }
    set Apellidos(Apellidos) {
        this._Apellidos = Apellidos;
    }
    set Genero(Genero) {
        this._Genero = Genero;
    }
    set Rol(Rol) {
        this._Rol = Rol;
    }
    get Id() {
        return this._Id;
    }
    get Documento() {
        return this._Documento;
    }
    get Nombres() {
        return this._Nombres;
    }
    get Apellidos() {
        return this._Apellidos;
    }
    get Genero() {
        return this._Genero;
    }
    get Rol() {
        return this._Rol;
    }
}

module.exports = Persona;