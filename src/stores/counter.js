import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// defineStore('nama-unique-store', setupFunction)
export const useCounterStore = defineStore('counter', () => {
    // 1. STATE (Data)
    const count = ref(0)
    const name = ref('Eduardo')

    // 2. GETTERS (Computed Data)
    const doubleCount = computed(() => count.value * 2)

    // 3. ACTIONS (Methods)
    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    return { count, name, doubleCount, increment, decrement }
})
