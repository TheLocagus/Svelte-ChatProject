<script lang="ts">
    
    const changeSize = () => {
        const textarea = document.querySelector('textarea');
            if (textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = `${textarea.scrollHeight}px`;
    }}

</script>

<div class="chat-send-message-field">
    <div class="input-field">
            <textarea on:input={() => changeSize()} rows={1} style="max-height: 100px"></textarea>
    </div>
    <div class="send-btn-field"></div>
</div>

<style>
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

    .input-field textarea {
        padding: 0;
        width: 100%;
        height: 22px;
        border-radius: 5px;
        border: none;
        outline: none;
        resize: none;
        line-height: 22px;
        /* overflow: hidden; */
        
    }

    textarea::-webkit-scrollbar {
        background-color: aqua;
        width: 5px;
        position: absolute;
    }

    textarea::-webkit-scrollbar-thumb {
        border-radius: 5px;
        
        background-color: red;

    }

</style>