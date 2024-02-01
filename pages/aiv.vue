	<template>
		<div>
			<Navbar/>
				<div class="content" style="width: 100%;">
					<section id="ai-voucher-top-img" class="page-visual ai-voucher">            
						<div class="ButtonM">
							<button @click="click()" class="voucher-btn">문의하기</button>
						</div>
					</section>
					<div id="container" justify="center" class="sec-inner show" style="width: 100%;">
						<div id="#inner-container">
							<div class="sec-title show" style="padding: 35px 0px; border-bottom: none; opacity: 1; animation: none; transform: none;">
								<h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
									AI 바우처 사업이란?
								</h3>
							</div>
							<div style="margin-left: 30px;">
								<img class="voucher_text" src="~/assets/voucher_text.png">
							</div>
							<div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
								<h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
										인텔리시스 AI 솔루션
								</h3>   
							</div>
							<div class="company-diagram-text" style="width: 100%;">
								<div class="slidebox" style="width: 100%;">
									<input type="radio" name="slide" checked="" id="slide01">
									<input type="radio" name="slide" id="slide02">
									<input type="radio" name="slide" id="slide03">         
									<input type="radio" name="slide" id="slide04">
									<input type="radio" name="slide" id="slide05">
									<ul class="slidelist" style="list-style: none;">
										<li class="slideitem" style="list-style: none; text-align: center">
											<img class="example" src="~/assets/v1.png" style="width: 100%;">
										</li>		
									</ul>	
								<div class="progress" style="width: max-content; margin: 0 auto">
								
									<span id="progress01" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
								
									<span id="progress02" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
								
									<span id="progress03" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
								
									<span id="progress04" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
								
									<span id="progress05" style="display:inline-block; border-radius: 100%; width: 10px; height: 10px; background-color: #9b9998"></span>
						
								</div>
							</div>
						</div>        
						<div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
							<h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
							추진일정
							</h3>
						</div>
						<div style="text-align: center;">
							<img class="process" src="~/assets/v2.png">
						</div>
						<div class="sec-title show" style="border-bottom: none; opacity: 1; animation: none; transform: none">
							<h3 style="font-size: 30px; font-family: 'GmarketSansBold', 'Noto Sans KR'">
							추진체계
							</h3>
						</div>
						<div style="text-align: center;">
							<img object-fit="cover" class="entity" src="~/assets/v3.png">
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>

			
			
	</template>

	<script>

	import Navbar from '~/components/Navbar.vue';
	import Footer from '~/components/Footer.vue';

	export default {
		components: {
			Navbar,
			Footer
		},
		name: 'AIb',
		methods:{
			click(){
					alert("버튼을 클릭했습니다.")
			}
		}
	}
	</script>

	<style scoped>

	.slidebox .slidelist {
		position: relative;
		white-space: nowrap;
		font-size: 0;
		overflow: hidden;
	}


	div{
		display:block;
	}


	.ButtonM{
		width: max-content;
		position: absolute;
		bottom: 40px;
		left: 70px;
	}
	.voucher-btn{
		height: 3rem;
		background-color: #c8161f;
		color: white;
		border-radius: 50px;
		text-align: center;
		user-select: none;
		white-space: nowrap;
		width: 10rem;
		font-size: 1.2rem;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px;
		font-weight: 800;
	}

	.slide-control [class*="control"] {
		display: none;
	}

	.slidebox .slide-control [class*="control"] label.next {
		right: -50px;
	}
	.slidebox .slide-control [class*="control"] label {
		position: absolute;
		z-index: 10;
		top: 60%;
		transform: translateY(-50%);
		padding: 20px;
		border-radius: 50%;
		cursor: pointer;
	}

	.next_icon {
		width: 35px;
		height: 35px;
		}

	.prev_icon {
		width: 35px;
		height: 35px;
	}

	#slide05:checked ~ .progress #progress05 {
		background-color: purple !important;
	}

	button{
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
		letter-spacing: normal;
		word-spacing: normal;
		line-height: normal;
		text-transform: none;
		text-indent: 0px;
		text-shadow: none;
		display: inline-block;
		padding-block: 1px;
		padding-inline: 6px;
	}

	.content{
		position: relative;
		z-index: 0;
	}

	#container{
		min-height: 100vh;
		position: relative;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;

	}

	.sec-inner {
		max-width: 1440px;
		width: 100%;
		height: calc(100% + 80px);
		margin: 0 auto;
	}

	.sec-title h3 {
		font-size: 50px;
		font-family: 'Noto Sans KR', sans-serif;
		font-weight: 700;
		color: #000;
		min-width: 515px;
	}

	h3{
		display: block;
		font-size: 1.17em;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
	}

	.sec-title {
		padding: 70px 0;
		display: flex;
		border-bottom: 1px solid #f1f1f1;
		opacity: 0;
		visibility: visible;
		transform: translateY(40px);
	}

	.slidebox{
		margin: 0 auto;
		margin-bottom: 20px;
		position: relative;
	}

	[name="slide"] {
		display: none;
	}
	input {
		border-radius: 0;
	}

	input, textarea, button, select {
		border: none;
		background: none;
		outline: none;
		border-radius: 0;
	}
	input[type="radio" i] {
		background-color: initial;
		cursor: default;
		appearance: auto;
		box-sizing: border-box;
		margin: 3px 3px 0px 5px;
		padding: initial;
		border: initial;
	}

	#slide05:checked ~ .slidelist .slideitem {
		left: -400%;
	}

	.slidebox .slidelist .slideitem {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		background-color: #fff;
		width: 100%;
		transition: all 1s;
	}

	slidebox .slidelist {
		position: relative;
		white-space: nowrap;
		font-size: 0;
		overflow: hidden;
	}

	img {
		overflow-clip-margin: content-box;
		overflow: clip;
	}
	.sec-title.show {
		animation: fadeIn-up 0.75s ease forwards;
	}

	img.process {
		width: 70%;
		object-fit: cover;
		margin-bottom: 3%;
	}

	img.entity {
		width: 75%;
		object-fit: contain;
		margin-bottom: 3%;
	}

@media (max-width: 1920px){
	#ai-voucher-top-img {
		height: 545px;
		position: relative;
	}
	img.entity {
		width: 65%;
		object-fit: contain;
		margin-bottom: 3%;
	}
	img.process {
		width: 60%;
		object-fit: cover;
		margin-bottom: 3%;
	}

	.sec-title h3 {
		min-width:394px;
		font-weight:700;
		color: black;
	}
}

	@media (max-width: 1600px){
		.ai-voucher.page-visual {
			background: url(/assets/aiv_banner.jpeg);
			background-size: cover;
			margin-top: 80px;
		}
		img.example {
			width: 80%;
			object-fit: contain;
			margin-bottom: 3%;
		}
	}	

	.ai-voucher.page-visual {
			background: url(~/assets/aiv_banner.jpeg);
			background-size: cover;
			margin-top: 80px;
		}
	.page-visual {
		height: 800px;
	}

	</style>