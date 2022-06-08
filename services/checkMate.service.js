import { piecesDetermine } from "./piecesDetermine.service.js";
import { $, $$$, deepclone } from "../utils/utils.js";
import { chessConfig } from "../config/chessConfig.config.js";
import { playerTurn } from "./playerTurn.sevices.js";

export const checkMate = {
  gameOver: false,

  cantMoveDueToCheck({ pieceSelectedPosition, pieceBoxPosition }) {
    const pieceBoxElementSelected = $(`#${pieceSelectedPosition}`);
    const pieceElementSelected = $$$(
      pieceBoxElementSelected,
      chessConfig.chessPieceSelector
    );

    const clonedPieceElement = pieceElementSelected.cloneNode();
    const tempPieceBoxElement = $(`#${pieceBoxPosition}`);
    const tempPieceElement = $$$(
      tempPieceBoxElement,
      chessConfig.chessPieceBoxSelector
    );
    if (tempPieceElement) document.body.append(tempPieceElement);

    tempPieceBoxElement.append(clonePieceElement);
    pieceElementSelected.remove();

    ///

    const newDeterminations = deepclone(piecesDetermine.determinations);
    piecesDetermine.determinationsSelector = "potentialDeterminations";
    piecesDetermine.determinations = newDeterminations;

    delete piecesDetermine.determinations[pieceSelectedPosition];
    piecesDetermine.determinations[pieceBoxPosition] = {};
  },
};
