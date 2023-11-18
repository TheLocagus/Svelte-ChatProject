<script lang="ts">
import { getContext } from "svelte";
import type { Writable } from "svelte/store";
import { sendMessage } from "../../utils";

const socket: Writable<WebSocket> = getContext("socket");
let value = "";

let textarea: HTMLTextAreaElement;

const INITIAL_HEIGHT = 34;

const handleTextarea = (e: Event) => {
    if (!e.target) return;

    textarea.style.overflow = "hidden";

    if (Number(textarea.scrollHeight) >= 120) {
        textarea.style.overflow = "auto";
        textarea.style.height = "120px";
        value = (e.target as HTMLTextAreaElement).value;
        return;
    }
    textarea.style.height = `${INITIAL_HEIGHT}px`;
    textarea.style.height =
        textarea.offsetHeight > textarea.scrollHeight
            ? textarea.offsetHeight.toString() + "px"
            : textarea.scrollHeight.toString() + "px";

    value = (e.target as HTMLTextAreaElement).value;
};

const isMessageToSend = (e: KeyboardEvent) => {
    const isMessageEmpty = (e.target as HTMLTextAreaElement).value.replaceAll(
        "\n",
        "",
    ).length;

    return e.key === "Enter" && e.shiftKey === false && isMessageEmpty;
};

const handleSendMessage = (e: KeyboardEvent) => {
    if (isMessageToSend(e)) {
        e.preventDefault();
        sendMessage($socket, value);
        (e.target as HTMLTextAreaElement).value = "";
        value = "";
        textarea.style.height = `${INITIAL_HEIGHT}px`; //restore default height of textarea
    }
};
</script>

<div class="chat-send-message-field">
    <div class="input-field">
        <div class="textarea-wrapper">
            <textarea
                bind:this="{textarea}"
                on:input="{(e) => handleTextarea(e)}"
                on:keypress="{(e) => handleSendMessage(e)}"></textarea>
        </div>
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
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}

.input-field {
    width: 100%;
    display: flex;
    align-items: center;
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
