import { ref, onMounted, onUnmounted } from 'vue'

export default function useMousePosition() {
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        document.addEventListener('click', updateMouse)
    })
    onUnmounted(() => {
        document.addEventListener('click', updateMouse)
    })
    return { x, y }
}