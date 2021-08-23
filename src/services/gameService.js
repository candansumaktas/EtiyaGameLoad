import { games } from "../data/games.js";
import { DataError } from "../models/dataError.js";

export default class GameService {
    constructor() {
        this.arcades = []
        this.strategies = []
        this.errors = []
    }

    load() {
        for (let game of games) {

            for (let i = 0; i < games.length; i++) {
                
                if ((game.name.toLowerCase().trim() === games[i].name.toLowerCase().trim())&& games.indexOf(game) != i) {
                     this.errors.push("Bu oyun ismi tekrar ediyor : " + games[i].name, games[i])                     
                     games.splice(i, 1) }
            }

            switch (game.type) {
                case "arcade":
                    if (this.validateGame(game)) {
                        this.arcades.push(game)

                    }
                    break;

                case "strategy":
                    if (this.validateGame(game)) {
                        this.strategies.push(game)

                    }

                    break;

                default:
                    this.errors.push(new DataError("Geçersiz oyun tipi: " + game.name, game))
                    break;
            }
        }
    }

    validateGame(game) {
        let requiredFields = ["id", "name", "unitPrice", "type"]

        let hasErrors = false;
        for (let field of requiredFields) {
            if (!game[field]) {
                this.errors.push(new DataError("Geçersiz alan: " + game))
                hasErrors = true;
            }

        }


        return !hasErrors;
    }

    // validateName(game) {
    //     for (const chars of games) {
    //         if (game.name.toLowerCase().trim() === chars.name.toLowerCase().trim()) {
    //             this.errors.push(new DataError("Aynı isimli oyun mevcut: ", game))
    //             return false;
    //         }
    //     }
    //     return true;

    // }
}


