<script lang="ts">
    import { createEventDispatcher, getContext } from "svelte";
    import { sendMessage } from "../../utils";
    import type { Writable } from "svelte/store";

    const socket: Writable<WebSocket> = getContext('socket');
    let value = '';

    const dispatch = createEventDispatcher()

    const handleCustomTextarea = (e: Event) => {
        const div = e.target as HTMLDivElement;
       
        if(!div.style.maxWidth){
            div.style.maxWidth = div.scrollWidth.toString() + 'px';
        }

        value = div.innerText;
    }

    const handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();

        const div = e.target as HTMLDivElement;
        if(!div.style.maxWidth){
            div.style.maxWidth = div.scrollWidth.toString() + 'px';
        }

        const clipboardData = e.clipboardData;
        const pastedText = clipboardData?.getData('text/plain') ?? '';

        const selection = window.getSelection();
        if (!selection || !selection.rangeCount) return;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(pastedText));
        selection.collapseToEnd();
    }


</script>

<div class="chat-send-message-field">
    <div class="input-field">
        <div class="custom-textarea-wrapper">
            <div class="custom-textarea" contenteditable=true  on:input={(e) => handleCustomTextarea(e)} on:paste={e => handlePaste(e)}/>
        </div>
    </div>
    <div class="send-btn-field">
        <button on:click={() => sendMessage($socket, value)}>Send</button>
    </div>
</div>

<style>
    .custom-textarea-wrapper {
        width: 100%;
        padding: 10px 10px;
        background-color: #726a6a;
    }

    .custom-textarea {
        max-height: 120px;
        width: 100%;
        background-color: #726a6a;
        color: #E4E6EB;
        outline: none;
        overflow-y: auto;
        cursor: pointer;
    }

    .custom-textarea :global(div) {
        cursor: text;
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

    .custom-textarea::-webkit-scrollbar {
        background-color: #222;
        width: 10px;
        border-radius: 5px;

    }

    .custom-textarea::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #444;


    }

</style>