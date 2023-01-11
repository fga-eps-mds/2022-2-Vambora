export interface ICreateRouteDTO {
  userId: string,
  name: string,
  description: string,
  distance: number,
  duration: number,
  origin: string[],
  destination: string[],
}