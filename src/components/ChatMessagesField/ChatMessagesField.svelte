<script lang="ts">
    import type { MessageDTO } from "../../types/api";
    import Message from "./_components/Message/Message.svelte";

    export let messages: MessageDTO[];

</script>

<div class="chat-messages-field">
    <div class="separator"></div>
    {#each messages as message}
        <Message {message}/>
    {/each}
    
</div>

<style>
    .separator {
        flex-grow: 1;
    }

    .chat-messages-field {
        display: flex;
        flex-direction: column;
        color: white;
        overflow-y: auto;
        flex-grow: 1;
    }

    
</style>