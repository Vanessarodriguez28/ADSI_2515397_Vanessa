const tiendaVirtual = require('./tiendaVirtual')
class Login extends tiendaVirtual {
    constructor(Nit, Nombre, Usuario, Contraseña) {
        super(Nit, Nombre)
        this._Usuario = Usuario;
        this._Contraseña = Contraseña;
    }
    set usuario(Usuario) {
        this._Usuario = Usuario;
    }
    set Contraseña(Contraseña) {
        this._Contraseña = Contraseña;
    }
    Validacion() {
        return 'el usuario es correcto'
    }
}
module.exports = Login;