import { get, writable, type Writable } from "svelte/store";
import type { MessageDTO } from "./types/api";

export const handleWebsocket = (socket: WebSocket) => {
    socket.onopen = (event) => {
        console.log("Połączenie nawiązane.");
    };

    socket.onmessage = (event) => {
        console.log("Otrzymano dane:", event.data);

        if (typeof get(chatHistory) === "undefined") {
            chatHistory.set(JSON.parse(event.data));
        } else {
            let dataFromBackend: MessageDTO = JSON.parse(event.data);
            dataFromBackend.text = JSON.parse(dataFromBackend.text);

            chatHistory.update((data) => {
                console.log(data);
                console.log(event.data);
                return [...(data as MessageDTO[]), dataFromBackend];
            });
        }
    };

    socket.onclose = (event) => {
        console.log("Połączenie zamknięte.");
    };
};

export const sendMessage = (socket: WebSocket, message: string) => {
    socket.send(message);
};

export const closeConnection = (socket: WebSocket) => {
    socket.close();
};

export const chatHistory: Writable<MessageDTO[] | undefined> = writable();
