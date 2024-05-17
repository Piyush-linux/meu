<script setup>
	defineProps=["opt1","opt2"]
</script>
<template>
	<div class="select">
		<!-- Option_1 -->
		<select name="length" id="length">
			<option v-for="x in opt1" :value="x"> {{ x }} </option>
		</select>
		<!-- Option_2 -->
		<select name="" id="">
			<option v-for="y in opt2" :value="y" default> {{ y }} </option>
		</select>
	</div>
</template>

<style>
.select{
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.select select{
	border-radius: 5px;
	padding: .7rem;
	-webkit-appearance: listbox;
}
</style>