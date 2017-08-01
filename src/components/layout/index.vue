<template>
	<div id="app">
		<!--头部-->
		<app-header></app-header>
		<!--侧边栏-->
		<app-slidebar></app-slidebar>
		<!-- 主体 -->
		<div class="main">

			<!-- 其它页面自已调整吧 -->
			<div class="container-fluid">
				<!-- 个人资料 -->
				<router-view></router-view>
			</div>
		</div>
	</div>


</template>

<script>
	import Header from '../layout/header.vue';
	import Slidebar from '../layout/slideBar.vue';

	export  default{
		components: {
			'app-header'  : Header,
			'app-slidebar': Slidebar,
		}
	}


</script>

<style>

</style>