let sliderImages = document.querySelectorAll('.slide'),
	leftArrow = document.querySelector('#left-arrow'),
	rightArrow = document.querySelector('#right-arrow'),
	current = 0;  //current state of array

	//clear images
	function reset() {
		for(let i = 0; i < sliderImages.length; i++){
		 	sliderImages[i].style.display = 'none';
		}
	}

	function startSlide() {
		reset();
		sliderImages[0].style.display = 'block';
	}

	//show previous
	function slideLeft(){
		reset();
		sliderImages[current - 1].style.display = 'block';
		current--;
	}

	//show next
	function slideRight() {
		reset();
		sliderImages[current + 1].style.display = 'block';
		current++;
	}

	//Clicking the Left Arrow
	leftArrow.addEventListener('click',function(){
		if (current === 0) {
			current = sliderImages.length;
		}
		slideLeft();
	});

	//clicking the Right Arrow
	rightArrow.addEventListener('click',function(){
		if (current === sliderImages.length - 1){
			current = -1;
		}
		slideRight();
	});

	startSlide();