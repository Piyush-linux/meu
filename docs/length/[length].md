
<script setup>
/*
1. Get param : ( km-to-m )
2. Sort param to get category : ( Length )
3. Get Data with id=Length
4. render that data with importing the require component
*/

import { useData } from 'vitepress';
import { data } from '../data/example.data.js';
import Length from '../components/Length.vue';

const { params } = useData();
const response = data.data.filter((x) => {
    return x.id == params.value.length;
})

const content = response[0]



</script>

# {{ content.meta.title }}

<Length />