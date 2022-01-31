export interface peliculaCreacionDTO{
    titulo: string;
    resumen:string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poste:File;
}

export interface peliculaDTO{
    titulo: string;
    resumen:string;
    enCines: boolean;
    fechaLanzamiento: Date;
    trailer: string;
    poster:string;
}