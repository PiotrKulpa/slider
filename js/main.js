'use strict';
			var count = 0;
			var timer1 = 0;
			var timer2 = 0;
			var sFile = '';

			function sliderStart() {
				slider.changeSlide();
			}

			var slider = {
				sliderInterval: 5000,
				sliderIntervalHide: 4500,
				fadeInterval: 500,
				changeSlide: function(){
					count++;
					if (count>5){
						count=1;
					}
					sFile = '<img src=\'slajdy/slajd' + count + '.jpg\' />';
					document.getElementById('slider').innerHTML = sFile;
					$('#slider').fadeIn(this.fadeInterval);
					timer1 = setTimeout('sliderStart()', this.sliderInterval);
					timer2 = setTimeout('slider.hideSlide()', this.sliderIntervalHide);
				},
				hideSlide: function(){
					$("#slider").fadeOut(this.fadeInterval);
				},
				//only for navigation
				setSlide: function(slideNumber){
					clearTimeout(timer1);
					clearTimeout(timer2);
					count = slideNumber - 1;
					slider.hideSlide();
					setTimeout('sliderStart()', 500);
				}
			}
