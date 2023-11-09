<!DOCTYPE html>
<html lang="ru">
	<?php use \EvolutionCMS\Main\Helper; ?>
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="keywords" content="{{ $keyw }}">
		<meta name="description" content="{{ $desc }}">
		<base href="{{ MODX_SITE_URL }}">
		<link href="dashboard/css/style.min.css" type="text/css" rel="stylesheet">
		<link href="html/css/custom.css" type="text/css" rel="stylesheet">
		<link rel="preload" href="dashboard/fonts/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>
		<script src="dashboard/js/libs/jquery.min.js"></script>
		<title>{{ $titl }}</title>

		
			</head>

		<body>
			<div class="wrap">
				<!--header-->
				<header class="header">
					<div class="container">
						<h1>{{ $streetInfo['pagetitle'] ?? '' }} {{ $houseInfo['pagetitle'] ?? '' }}</h1>
						<div class="date">
							<div class="date__top">
								<span class="date__hours"></span>
								<span>:</span>
								<span class="date__min"></span>
							</div>
							<div class="date__bottom">
								<span class="date__date"></span>
								<span class="date__month"></span>, <span class="date__day"></span>
							</div>
						</div>
					</div>
				</header>
				<!--main-->
				<main class="main">
					<section class="page">
						<div class="page__inner">
						    @if(!empty($houseWebcams))
							   <div class="video-cols" data-link="https://rtsp.infodm.ru/stream.html?src=entry&src=main-door&mode=webrtc"></div>
							@endif
						    <!-- @if(!empty($houseWebcams))
							<div class="video-cols">
								@foreach($houseWebcams as $item)
								<div class="video-cols__col">
									<input type="hidden" name="webrtc-url" class="webrtc-url" value="{{ $item['link'] }}">
									<video class="webrtc-video" autoplay="" muted="" playsinline="" controls="" style="max-height: 100%;"></video>
								</div>
								@endforeach
							</div>
							@endif -->
							@if(!empty($announces))
							<h5>Коротко о важном из чата дома:</h5>
							<div class="item-blocks">
								@foreach($announces as $item)
								<div class="item-block  @if(!empty($item['tv_pinned'])) pinned @endif ">
									<p>{{ $item['introtext'] ?: $item['pagetitle'] }}</p>
									<span class="time">{{ $item['date'] }}</span>
								</div>
								@endforeach

							</div>
							@endif
						</div>
						<div class="page__bottom">
							<div class="container">
								<div class="subscribe">
									<p>Подписаться на важные уведомления по дому можно на сайте:</p>
									<span>infodm.ru</span>
								</div>
								@if(!empty($houseSlider))
								<div class="swiper mainswiper">
									<div class="swiper-wrapper">
										@foreach($houseSlider as $item)
										<div class="swiper-slide mainswiper__item">
											<div class="mainswiper__left">
												{!! $item['title'] !!}
												<div class="mainswiper__preview">
													<picture>
														<source srcset="{{ Helper::webp($item['image']) }}" type="image/webp">
														<img src="{{ $item['image'] }}"
															 @if(!empty($item['image_width'])) width="{{ $item['image_width'] }}" @endif
															 @if(!empty($item['image_height'])) height="{{ $item['image_height'] }}" @endif
															 alt="">
													</picture>
												</div>
											</div>
											<div class="mainswiper__right">
												{!! $item['text'] !!}
											</div>
										</div>
										@endforeach
									</div>
									<div class="swiper-pagination"></div>
								</div>
								@endif

							</div>
						</div>
					</section>
				</main>

				<!--footer-->
				<footer></footer>
			</div>

			<script src="dashboard/js/libs/swiper.min.js"></script>
			<script src="dashboard/js/libs/video-rtc.js"></script>
			<script src="dashboard/js/main.js"></script>
			<script src="html/js/custom.js"></script>
			<script>app.reloadPage('{{ $documentObject['id'] }}')</script>		
		</body>

		</html>
