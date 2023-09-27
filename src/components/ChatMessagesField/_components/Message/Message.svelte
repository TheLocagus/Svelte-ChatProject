<script lang="ts">
import type { MessageDTO } from "../../../../types/api";

    export let message: MessageDTO;

    const parseTimestampToTime = (timestamp: number) => {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    }
</script>
{#if message.showTime}
<span class="time">{parseTimestampToTime(message.time)}</span>

{/if}

{#if message.author === 'AI' }
<div class="ai-message">
    <div class="send-message">
        <p>{message.text}</p>
    </div>
</div>
{:else}
<div class="user-message">
    <div class="send-message">
        <p>{message.text}</p>
    </div>
</div>
{/if}

<style>
    .time {
        color: black;
        text-align: center;
    }

    .user-message {
        display: flex;
        justify-content: flex-end;
    }

    .send-message {
        margin: 5px 0;
        max-width: 70%;
        padding: 6px 10px;
        background-color: #333;
        border-radius: 10px;
        
    }
</style>