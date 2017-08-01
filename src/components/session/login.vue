<template>
	<div class="login">
		<div class="login-wrap">
			<div class="avatar">
				<img src="../../assets/img/monkey.png" class="img-circle" alt="">
			</div>
			<form class="col-md-offset-1 col-md-10" @submit.prevent="login">
				<div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
					<input type="text" class="form-control" placeholder="用户名" v-model="user.username">
				</div>
				<div class="input-group input-group-lg">
                    <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
					<input type="password" class="form-control" placeholder="密码" v-model="user.password">
				</div>
				<p v-show="isLogin">{{ login_message }}</p>
				 <!--<a href="#/home" class="btn btn-lg btn-primary btn-block">登 录</a>-->
				<button type="submit" class="btn btn-lg btn-primary btn-block">{{btnname}}</button>
			</form>
		</div>
	</div>

</template>

<script>
	import axios from 'axios';
	import router from '../../router/';
	export default{
		data(){
			return {
				btnname: '登 录',
				user:{
					username:'',
					password:''
				},
				isLogin:false,
				login_message:'登录以此'
			}
		},
		methods:{
			login(){
				this.login_message = '正在登录...';
				var params = new URLSearchParams();
				params.append('tc_name',this.user.username);
				params.append('tc_pass',this.user.password);
				this.isLogin = true;
				axios.post(
					'/api/login',params
				).then(res=>{
					console.log(res)
					if (res.data.code ==200&&res.data.msg =="登录成功!"){
						this.login_message = '登录成功，正在跳转到首页.';
						router.replace('/home');
					}
				}).catch(err=>{
					console.log(err);
					this.login_message = '登录失败，用户名或密码错误';
				})
			}
		}
	}
</script>

<style>

</style>