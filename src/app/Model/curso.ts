export class Curso {
  private _nombre: string;
  private _puntuacion: Number;
  private _url: string;

  constructor(nombre: string, puntuacion: Number) {
    this._nombre = nombre;
    this._puntuacion = puntuacion;
    this._url = '';
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get puntuacion(): Number {
    return this._puntuacion;
  }

  public get url(): string {
    return this._url;
  }
  
  public set url(v : string) {
    this._url = v;
  }
  
}
