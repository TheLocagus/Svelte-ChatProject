<script lang="ts">
import type { MessageDTO } from "../../types/api";
import ChatHeader from "../ChatHeader/ChatHeader.svelte";
import ChatMessagesField from "../ChatMessagesField/ChatMessagesField.svelte";
import ChatSendMessageField from "../ChatSendMessageField/ChatSendMessageField.svelte";

export let messages: MessageDTO[] | undefined;

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
