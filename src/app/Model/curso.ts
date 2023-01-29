export class Curso {

    private _nombre: string;
    private _puntuacion: Number

    constructor(nombre:string, puntuacion:Number) {
        this._nombre=nombre;
        this._puntuacion=puntuacion;
    }

    public get nombre() : string {
        return this._nombre
    }

    public get puntuacion() : Number {
        return this._puntuacion;
    }
    
    
}
