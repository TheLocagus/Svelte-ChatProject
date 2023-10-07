import { FIVE_MINUTES } from "../../../utils/numbers.utils";

const DELAY_TIME = FIVE_MINUTES;

export const isAtleastFiveMinutesFromLastMessage = (
    previousTimestamp: number,
    actualTimestamp: number
) => actualTimestamp - previousTimestamp >= DELAY_TIME;

export const isAtleastFiveMinutesFromNextMessage = (
    actualTimestamp: number,
    nextTimestamp: number
) => nextTimestamp - actualTimestamp >= DELAY_TIME;

export const isNextMessageFromUser = (
    actualAuthor: string,
    nextAuthor: string
) => actualAuthor !== nextAuthor;
export const isPreviousMessageFromOtherUser = (
    previousAuthor: string,
    actualAuthor: string
) => previousAuthor !== actualAuthor;
