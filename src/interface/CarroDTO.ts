export interface CarroDTO {
    idCarro?: number, // ID do carro (? indica um paramentro opcional)
    marca: string, // Marca do carro
    modelo: string, // Modelo do carro
    ano: number,    // Ano do carro
    cor: string,  // Cor do carro
    situacao?: boolean // Situação do carro
}