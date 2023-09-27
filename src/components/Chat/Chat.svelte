<script lang="ts">
    import ChatHeader from "../ChatHeader/ChatHeader.svelte";
    import ChatMessagesField from "../ChatMessagesField/ChatMessagesField.svelte";
    import ChatSendMessageField from "../ChatSendMessageField/ChatSendMessageField.svelte";
    import Siema from "../ChatSendMessageField/siema.svelte";

    const messages =  [
        {
            id: '1',
            author: 'User',
            text: 'Witam.',
            time: 1694376329000,
            showTime: true,
        },
        {
            id: '2',
            author: 'User',
            text: 'Odpowiedz mi na pytanie, jak robi krowa?',
            time: 1694376329000,
            showTime: false,
        },
        {
            id: '3',
            author: 'AI',
            text: 'Witam. Mu mu',
            time: 1694376329000,
            showTime: false,
        },
    ]

</script>

<div class="chat-wrapper">
    <ChatHeader/>
    <ChatMessagesField {messages}/>
    <ChatSendMessageField/>
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