import { get, writable, type Writable } from "svelte/store";
import type { MessageDTO } from "./types/api";

export let isTyping: Writable<boolean> = writable(false);

export const handleWebsocket = (socket: WebSocket) => {
    socket.onopen = (event) => {
        console.log("Połączenie nawiązane.");
    };

    socket.onmessage = (event) => {
        console.log("Otrzymano dane:", event.data);

        const data: [string] | MessageDTO[] = JSON.parse(event.data);

        if (data.length === 1 && data[0] === "typing") {
            isTyping.set(true);
            return;
        }

        if (data.length === 1 && data[0] === "finished-typing") {
            isTyping.set(false);
            return;
        }

        if (typeof get(chatHistory) === "undefined") {
            chatHistory.set(data as MessageDTO[]);
        } else {
            let dataFromBackend: MessageDTO = data[0] as MessageDTO;
            dataFromBackend.text = JSON.parse(dataFromBackend.text);

            chatHistory.update((data) => {
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
