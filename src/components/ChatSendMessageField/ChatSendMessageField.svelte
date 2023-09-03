<script lang="ts">
    let value = '';

    const handleTextarea = (e: Event) => {
        const div = e.target as HTMLTextAreaElement;
       
        div.style.overflow = 'hidden';

        if(Number(div.style.height.replace('px', '')) > 120){
            div.style.overflow = 'auto';
        }
        div.style.height = '30px';
        div.style.height = div.scrollHeight.toString() + 'px'

        value = div.innerText;
    }

</script>

<div class="chat-send-message-field">
    <div class="input-field">
        <div class="textarea-wrapper">
            <textarea  on:input={(e) => handleTextarea(e)}></textarea>
        </div>
    </div>
    <div class="send-btn-field"></div>
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
        height: 30px;
        width: 100%;
        background-color: #726a6a;
        color: #E4E6EB;
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