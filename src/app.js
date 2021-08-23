import GameService from "./services/gameService.js";

let gameService=new GameService();
gameService.load()

console.log(gameService.arcades)
console.log(gameService.strategies)
console.log(gameService.errors)