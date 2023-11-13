
interface Nota  {
    nota: number
    peso: number
}

export function mediaNota(notas: Nota[]): number {

    const somaNotas = notas.reduce((prev, nota) => prev + nota.nota * nota.peso, 0 );
    const somaPesos = notas.reduce((prev, nota) => prev + nota.peso, 0 );

    const resultado = (somaNotas / somaPesos);

    return resultado

}


