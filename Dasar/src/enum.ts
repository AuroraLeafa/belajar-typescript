export enum customerType {
    Gold = "Gold",
    Silver = "Silver",
    Bronze = "Bronze"
}
export type Customer = {
    id: string
    name: string
    type: customerType
}