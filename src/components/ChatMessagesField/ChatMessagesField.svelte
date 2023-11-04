<script lang="ts">
import type { MessageDTO } from "../../types/api";
import Loader from "../Loader/Loader.svelte";
import Message from "./_components/Message/Message.svelte";
import SendTime from "./_components/SendTime/SendTime.svelte";
import {
    isAtleastFiveMinutesFromLastMessage,
    isAtleastFiveMinutesFromNextMessage,
    isNextMessageFromUser,
    isPreviousMessageFromOtherUser,
} from "./_utils/utils";

export let messages: MessageDTO[] | undefined;

</script>

<div class="chat-messages-field">
    <div class="separator"></div>
    {#if messages && messages.length}
        {#each messages as message, i}
            {#if i === 0 || isAtleastFiveMinutesFromLastMessage(messages[i - 1].time, messages[i].time)}
                <SendTime time="{message.time}" />
            {:else if isPreviousMessageFromOtherUser(messages[i - 1].author, messages[i].author)}
                <div class="additional-space"></div>
            {/if}
            <div class="message-wrap">
                <div class="img-wrap">
                    {#if message.author === "AI" && (i === messages.length - 1 || isNextMessageFromUser(messages[i].author, messages[i + 1].author) || isAtleastFiveMinutesFromNextMessage(messages[i].time, messages[i + 1].time))}
                        <img src="gptlogo.png" alt="Chatgpt logo icon" />
                    {/if}
                </div>
                <Message {message} />
            </div>
        {/each}
    {:else if messages}
        <div class="welcome-message">
            <img src="gptlogo.png" alt="Chatgpt logo icon" />
            <h2>GPT 4.0</h2>
            <span>Witaj. Jestem ChatGPT 4.0, zadaj mi pytanie!</span>
        </div>
    {:else}
        <Loader />
    {/if}
</div>

<style>
.separator {
    flex-grow: 1;
}

.welcome-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    color: black;
}

.welcome-message img {
    height: 5em;
    width: 5em;
    margin-top: 2em;
}

.welcome-message h2 {
    margin-top: 0.5em;
    font-size: 2em;
}

.welcome-message span {
    margin-top: 0.5em;
    font-size: 1.4em;
}

.additional-space {
    margin: 2px 0;
}

.chat-messages-field {
    position: relative;
    display: flex;
    flex-direction: column;
    color: white;
    overflow-y: auto;
    flex-grow: 1;
}

.message-wrap {
    display: flex;
    align-items: flex-end;
}

.img-wrap {
    width: 30px;
}

img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 5px;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #333;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: deeppink;
    border-radius: 10px;
}
</style>
