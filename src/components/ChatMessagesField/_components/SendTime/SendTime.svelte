<script lang="ts">
    import { parseTimestampToTime } from "../../../../utils/dates.utils";

    export let time: number;
    
</script>

<span class="time">{parseTimestampToTime(time)}</span>

<style>
    .time{
        text-align: center;
        color: black;
        padding: 3px 0;
    }
</style>