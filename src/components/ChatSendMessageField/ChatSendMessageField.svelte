<script lang="ts">
import { getContext, onMount } from "svelte";
import { sendMessage } from "../../utils";
import type { Writable } from "svelte/store";

const socket: Writable<WebSocket> = getContext("socket");
let value = "";

let textarea: HTMLTextAreaElement;

const INITIAL_HEIGHT = 34;

const handleTextarea = (e: Event) => {
    textarea.style.overflow = "hidden";

    if (Number(textarea.scrollHeight) >= 120) {
        textarea.style.overflow = "auto";
        textarea.style.height = "120px";
        value = textarea.innerText;
        return;
    }
    textarea.style.height = `${INITIAL_HEIGHT}px`;
    textarea.style.height =
        textarea.offsetHeight > textarea.scrollHeight
            ? textarea.offsetHeight.toString() + "px"
            : textarea.scrollHeight.toString() + "px";

    value = textarea.innerText;
};
</script>

<div class="chat-send-message-field">
    <div class="input-field">
        <div class="textarea-wrapper">
            <textarea
                bind:this="{textarea}"
                on:input="{(e) => handleTextarea(e)}"></textarea>
        </div>
    </div>
    <div class="send-btn-field">
        <button on:click="{() => sendMessage($socket, value)}">Send</button>
    </div>
</div>

<style>
.textarea-wrapper {
    width: 100%;
    padding: 10px 25px;
    background-color: #726a6a;
}

textarea {
    padding: 0;
    max-height: 120px;
    width: 100%;
    height: 34px;
    background-color: #726a6a;
    color: #e4e6eb;
    outline: none;
    cursor: text;
    resize: none;
}

.chat-send-message-field {
    display: flex;
    background-color: #3f3939;
    flex-basis: 7%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.input-field {
    display: flex;
    align-items: center;
    flex-basis: 80%;
    padding: 15px 10px;
}

textarea::-webkit-scrollbar {
    background-color: #222;
    width: 10px;
    border-radius: 5px;
}

textarea::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #444;
}
</style>
