export interface PedidoVendaDTO {
    idPedidoVenda?: number,
    idCliente: number,
    idCarro: number,
    dataVenda: string,
    valorVenda: number,
    situacao?: boolean
}