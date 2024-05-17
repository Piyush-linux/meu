<script setup>
    /*
 mm, cm, m, km, in, ft, yd, mi  
*/

import { ref } from 'vue';
import Length from '../components/Length.vue';
import { useData } from 'vitepress';
import { data } from '../data/example.data.js';

const { params } = useData();

const response = data.data.filter((x) => {
    return x.id == params.value.length;
})

const content = response[0]

let mm_to_cm = (km) => km * 1000;
let mm_to_m = (km) => km * 1000;
let mm_to_km = (km) => km * 1000;
let mm_to_in = (km) => km * 1000;
let mm_to_ft = (km) => km * 1000;
let mm_to_yd = (km) => km * 1000;
let mm_to_mi = (km) => km * 1000;

let cm_to_mm = (km) => km * 1000;
let cm_to_m = (km) => km * 1000;
let cm_to_km = (km) => km * 1000;
let cm_to_in = (km) => km * 1000;
let cm_to_ft = (km) => km * 1000;
let cm_to_yd = (km) => km * 1000;
let cm_to_mi = (km) => km * 1000;

let m_to_mm = (km) => km * 1000;
let m_to_cm = (km) => km * 1000;
let m_to_km = (km) => km * 1000;
let m_to_in = (km) => km * 1000;
let m_to_ft = (km) => km * 1000;
let m_to_yd = (km) => km * 1000;
let m_to_mi = (km) => km * 1000;

let km_to_mm = (m) => m / 1000;
let km_to_cm = (m) => m / 1000;
let km_to_m = (m) => m / 1000;
let km_to_km = (m) => m / 1000;
let km_to_in = (m) => m / 1000;
let km_to_ft = (m) => m / 1000;
let km_to_yd = (m) => m / 1000;
let km_to_mi = (m) => m / 1000;


let ans = ref("😎");
let inp = ref("");
let select_1 = ref(content.opt1[0]);
let select_2 = ref(content.opt2[0]);
// let input 
// Select is switched

let select_op1_1 = (x) => {
	// console.log(x.target.value);
	if (x.target.value == select_2.value ) return ;
	window.open(`/meu/length/${x.target.value}-to-${select_2.value}`,'_self');
}

let select_op1_2 = (y)=> {
	if (y.target.value == select_1.value ) return ;
	window.open(`/meu/length/${select_1.value}-to-${y.target.value}`,'_self');
}
// let convert = ()=>{
// 	switch (content.id) {
// 		case "km-to-m":
// 			ans.value = km_to_m(inp)
// 			break;
// 		default:
// 			break;
// 	}
// }

// If Select_1 is changed , redirect to that path 


</script>
<template>
    <div class="">
        <!-- title -->
        <h1> {{ content.meta.title }} </h1>
        <!-- content -->
        <h3> {{ content.meta.desc }} </h3>
        <br />
        <div class="select">
            <input type="text" placeholder="type ..." v-model="inp" />
            <select v-model="select_1" @input="select_op1_1">
                <option v-for="x in content.opt1" :value="x"> {{ x }} </option>
            </select>
            <!-- Option_2 -->
            <select name="select2" v-model="select_2" @input="select_op1_2">
                <option v-for="y in content.opt2" :value="y" default> {{ y }} </option>
            </select>
            <div class="ans"> {{ ans }} </div>
        </div>
        <button class="btn convert" @click="convert()"> convert </button>
    </div>
</template>
<style>
.select {
    font-size: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.select select {
    border-radius: 5px;
    padding: .7rem;
    -webkit-appearance: listbox;
}

.select input {
    border: 2px solid grey;
    height: 5vh;
    width: 50%;
    padding: 1rem;
}

.btn.convert {
    width: 100%;
}

.btn.convert:hover {
    transition: .5s;
    color: #fd79a8;
}

.ans {
    padding: 1rem 2rem;
    border: 3px dotted grey;
}
</style>