<template>
  <div class="m-auto">
    <h1 class="text-center text-2xl " >Dc Herros <span v-if="herosCount > 0">: {{herosCount}}</span></h1>
    <ul>
      <li class="flex justify-between" v-for="(value,index) in dcHerros" :key="index">
        <div>{{ value.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
          class="border rounded"
          v-model="newHero"
          placeholder="Type hero name here"
          ref="newHeroRef"
      >

      <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white"  type="submit">Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import {ref, onMounted,computed} from "vue";
export default {
  name: "DcHeros",
  setup() {
    const newHeroRef = ref('');
    const newHero = ref('');
    const dcHerros = ref ([
      {name: 'SupperGirl'},
      {name: 'Flash'},
      {name: 'Batman'},
      {name: 'Arrow'},
      {name: 'SuperMan'},
    ]);

    onMounted (() => {
      newHeroRef.value.focus()
    })
    const herosCount = computed ({
      get:() => dcHerros.value.length,
    })
    function remove(index) {
      dcHerros.value = dcHerros.value.filter((value, i) => i != index)
    }

    function addHero(){
      if(newHero.value !== ''){
        dcHerros.value.unshift({name:newHero.value});
        newHero.value = '';
      }
    }

    return {dcHerros, newHero, addHero, remove, newHeroRef, herosCount}
  },
}
</script>

<style scoped>

</style>
