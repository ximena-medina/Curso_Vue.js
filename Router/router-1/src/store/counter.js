import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count ++                
        }
    },
    getters: {
        double: (state) => state.count * 2
    }
})

//Segunda opcion con funcion computada.

// export const useCounterStore = defineStore('counter', () => {
//     const count = ref(0)
//     const increment = count.value ++
//     const double = computed = (() => count.value * 2)
//     return {
//         count,
//         increment,
//         double,
//     }
// })

//Datos: usamos el "this" para decirle que esa propiedad, o es variable.