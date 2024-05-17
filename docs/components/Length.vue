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

let mm_to_cm = (n) => n / 10;
let mm_to_m = (n) => n / 1000;
let mm_to_km = (n) => n / 1000000;
let mm_to_in = (km) => km * 1000;
let mm_to_ft = (n) => n / 304.8;
let mm_to_yd = (n) => n / 91.44;
let mm_to_mi = (n) => n / 1609344;

let cm_to_mm = (n) => n * 10;
let cm_to_m = (n) => n / 100;
let cm_to_km = (n) => n / 100000;
let cm_to_in = (km) => km * 1000;
let cm_to_ft = (km) => km * 1000;
let cm_to_yd = (n) => n / 91.44;
let cm_to_mi = (n) => n / 160934.4;

let m_to_mm = (n) => n * 1000;
let m_to_cm = (n) => n * 100;
let m_to_m = (n) => n;
let m_to_km = (n) => n / 1000;
let m_to_in = (n) => n / 0.0254;
let m_to_ft = (n) => n / 0.3048;
let m_to_yd = (n) => n / 0.9144;
let m_to_mi = (n) => n / 1609.344;

let km_to_mm = (n) => n * 1000000;
let km_to_cm = (n) => n * 100000;
let km_to_m = (n) => n * 1000;
let km_to_km = (n) => n ;
let km_to_in = (n) => n * 39370.1;
let km_to_ft = (n) => n * 3280.84;
let km_to_yd = (m) => m / 1000;
let km_to_mi = (m) => m / 1000;


let ans = ref("🔥");
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
let convert = ()=>{
    // console.log(inp.value)
    // console.log(select_1.value)
    // console.log(select_2.value)
    // console.log(content.id)
	switch (content.id) {
		case "km-to-m":
            console.log('--- Km to m ')
			ans.value = km_to_m(inp.value)
			break;
        case "km-to-cm":
            console.log('--- Km to cm ')
            ans.value = `${km_to_cm(inp.value)} ${select_2.value}`
            break;
		default:
			break;
	}
}

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
            <span>👉️</span>
            <!-- Option_2 -->
            <select name="select2" v-model="select_2" @input="select_op1_2">
                <option v-for="y in content.opt2" :value="y" default> {{ y }} </option>
            </select>
        </div>
            <div class="ans"> {{ ans }} </div>
            <br/>
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
    width: 20%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border: 3px dotted grey;
}
</style>