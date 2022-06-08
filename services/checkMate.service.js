import { piecesDetermine } from "./piecesDetermine.service.js";
import { $, $$$, deepclone } from "../utils/utils.js";
import { chessConfig } from "../config/chessConfig.config.js";
import { playerTurn } from "./playerTurn.sevices.js";

export const checkMate