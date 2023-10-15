<script lang="ts">
import type { MessageDTO } from "../../types/api";
import ChatHeader from "../ChatHeader/ChatHeader.svelte";
import ChatMessagesField from "../ChatMessagesField/ChatMessagesField.svelte";
import ChatSendMessageField from "../ChatSendMessageField/ChatSendMessageField.svelte";

const messages: MessageDTO[] = [
    {
        id: "1",
        author: "User",
        text: "Witam.",
        time: 1694376329000,
    },
    {
        id: "2",
        author: "User",
        text: "Odpowiedz mi na pytanie, jak robi krowa?",
        time: 1694376329000,
    },
    {
        id: "3",
        author: "AI",
        text: "Witsdsdam. Mu muWitam. Mu muWitam. Mu muWitam. Mu mu",
        time: 1694376329000,
    },
    {
        id: "4",
        author: "AI",
        text: "Witam. Mu mu",
        time: 1694376999990,
    },
    {
        id: "42",
        author: "AI",
        text: "Witam. Mu mu",
        time: 1694376999990,
    },
    {
        id: "42",
        author: "User",
        text: "Bardzo ładnie. Dziękuję!",
        time: 1694376999990,
    },
];
</script>

<div class="chat-wrapper">
    <ChatHeader />
    <ChatMessagesField {messages} />
    <ChatSendMessageField />
</div>

<style>
.chat-wrapper {
    margin-top: 50px;
    height: 800px;
    width: 450px;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
</style>
