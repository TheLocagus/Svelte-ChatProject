<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { closeConnection, handleWebsocket, sendMessage } from "../utils";
    import Chat from "../components/Chat/Chat.svelte";

    let socket: WebSocket;
    let toggleButtonText = 'Close';
    let socketReadyStatus = 0;
    let inputValue: string = '';

    onMount(() => {
        socket = new WebSocket("ws://localhost:3000/chat")
        handleWebsocket(socket);
    })

   

    const handleInputChange = (e: Event) => {
        inputValue = (e.target as HTMLInputElement)?.value;
    }

    const sendWsRequest = () => {
        sendMessage(socket, inputValue)
    }

    const toggleConnection = () => {
        if(socketReadyStatus === 2 || socketReadyStatus === 3){
            socket = new WebSocket("ws://localhost:3000/chat")
            handleWebsocket(socket);
            socketReadyStatus = socket.readyState;
            toggleButtonText = 'Close';
        } else {
            closeConnection(socket);
            socketReadyStatus = socket.readyState;
            toggleButtonText = 'Open';

        }
    }

    
</script>

<input type="text" value={inputValue} on:keyup={(e) => handleInputChange(e)}>
<button on:click={sendWsRequest}>Send</button>
<button on:click={toggleConnection}>{toggleButtonText} connection</button>
<Chat/>