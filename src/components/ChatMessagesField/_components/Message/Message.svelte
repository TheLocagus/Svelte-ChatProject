<script lang="ts">
import type { MessageDTO } from "../../../../types/api";

export let message: MessageDTO;
</script>

{#if message.author === "AI"}
    <div class="ai-message">
        <div class="sent-message">
            <p>{message.text}</p>
        </div>
    </div>
{:else}
    <div class="user-message">
        <div class="sent-message">
            <p>{message.text}</p>
        </div>
    </div>
{/if}

<style>
.user-message {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 5px;
    white-space: pre-line;
    overflow-wrap: break-word;
}

.ai-message {
    display: flex;
    width: 100%;
    margin-left: 2px;
}

.sent-message {
    margin: 1px 0;
    width: auto;
    max-width: 70%;
    padding: 6px 10px;
    border-radius: 10px;
}

.user-message .sent-message {
    background-color: deeppink;
}

.ai-message .sent-message {
    background-color: #444;
}
</style>
