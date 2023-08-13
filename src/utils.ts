export const handleWebsocket = (socket: WebSocket) => {
    socket.onopen = (event) => {
        console.log("Połączenie nawiązane.");
    };

    socket.onmessage = (event) => {
        const data = event.data;
        console.log("Otrzymano dane:", data);
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
