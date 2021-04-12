import {onMounted,onUnmounted} from 'vue'

export default function useWindowEvent(EventName,handleKeydown){
    onMounted(() => { window.addEventListener(EventName, handleKeydown)})

    onUnmounted(()=>{window.removeEventListener(EventName,handleKeydown)})

}
