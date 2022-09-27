$(document).ready(function() {
	/*dropdownmenu*/
	$('.newsbtn').on('mouseenter', function(){
		let dropdown = $('#dropdown');

		if (dropdown.css('display') != 'block') {
			dropdown.fadeIn();
		} else {
			dropdown.fadeOut();
		}

	});
	$('#dropdown').on('mouseleave', function() {
		$(this).fadeOut();
	});


	/*slider 1*/
	$('.next1').on('click', function(){
		let currentArticle = $('.active');
		let nextArticle = currentArticle.next();

		if(nextArticle.length) {
			currentArticle.removeClass('active');
			nextArticle.addClass('active');
		}
	});
	$('.prev1').on('click', function() {
		let currentArticle = $('.active');
		let prevArticle = currentArticle.prev();

		if(prevArticle.length) {
			currentArticle.removeClass('active');
			prevArticle.addClass('active');
		}
	});


	//teams
	$('.content').on('click', function(){
		let allTabs = $('.cont-info');
		let current = $(this).children('.cont-info');

		allTabs.removeClass('show');
		current.addClass('show');
	});



	//filter
	$('.all').on('click', function(){
		let all_rows = $('.shop_row');

		all_rows.children().removeClass('show');
		all_rows.children().removeClass('show1');
		all_rows.children().removeClass('show2');
		all_rows.children().removeClass('show3');
		all_rows.children().removeClass('show4');
		all_rows.children().addClass('show');
	});

	$('.hat').on('click', function(){
		let all_rows = $('.shop_row');
		let current = $('.hat_row');

		all_rows.children().removeClass('show');
		all_rows.children().removeClass('show1');
		all_rows.children().removeClass('show2');
		all_rows.children().removeClass('show3');
		all_rows.children().removeClass('show4');
		current.children().addClass('show1');
	});

	$('.shirt').on('click', function(){
		let all_rows = $('.shop_row');
		let current = $('.shirt_row');

		all_rows.children().removeClass('show');
		all_rows.children().removeClass('show1');
		all_rows.children().removeClass('show2');
		all_rows.children().removeClass('show3');
		all_rows.children().removeClass('show4');
		current.children().addClass('show2');
	});

	$('.hoodie').on('click', function(){
		let all_rows = $('.shop_row');
		let current = $('.hoodie_row');

		all_rows.children().removeClass('show');
		all_rows.children().removeClass('show1');
		all_rows.children().removeClass('show2');
		all_rows.children().removeClass('show3');
		all_rows.children().removeClass('show4');
		current.children().addClass('show3');
	});

	$('.shoe').on('click', function(){
		let all_rows = $('.shop_row');
		let current = $('.shoe_row');
		
		all_rows.children().removeClass('show');
		all_rows.children().removeClass('show1');
		all_rows.children().removeClass('show2');
		all_rows.children().removeClass('show3');
		all_rows.children().removeClass('show4');
		current.children().addClass('show4');
	});
	//form
	function nameValidation () {
		let firstName = $('input[name=first-name]');
		let lastName = $('input[name=last-name]');

		if(firstName.val() == 0 || !isNaN(firstName.val())){
			firstName.addClass('danger');
			alert('Please enter valid first name.');
		} else {
			firstName.removeClass('danger');
		}

		if(lastName.val() == 0 || !isNaN(lastName.val())){
			lastName.addClass('danger');
			alert('Please enter valid last name.');
		} else {
			lastName.removeClass('danger');
		}
	}
	
	function emailValidation(){
		let email = $('input[name=email]');

		if(email.val() != 0){
			email.removeClass('danger');
		} else {
			email.addClass('danger');
			alert('Please enter email.');
		}
	}

	function messageValidation(){
		let message = $('textarea');
		let messageLength = message.val().length;

		if(message.val() == 0){
			message.addClass('danger');
			alert('Please write message.');
		} else {
			if(messageLength > 50){
				message.addClass('danger');
				alert (`Message is: ${messageLength} symbols! Please make it 50 symbols.`);
			} else {
				message.removeClass('danger');	
			}
		}
	}
	$('.btn').on('click',function(e){
		e.preventDefault();

		nameValidation();
		emailValidation();
		messageValidation();
	});

	/*slider2*/

	$('.next2').on('click', function(){
		let currentArticle = $('.active2');
		let nextArticle = currentArticle.next();

		if(nextArticle.length) {
			currentArticle.removeClass('active2');
			nextArticle.addClass('active2');
		}
	});
	$('.prev2').on('click', function() {
		let currentArticle = $('.active2');
		let prevArticle = currentArticle.prev();

		if(prevArticle.length) {
			currentArticle.removeClass('active2');
			prevArticle.addClass('active2');
		}
	});

	function slider() {
        let first = $('.slider-item').first();
        let curImg = $('.active2');
        let nextImg = curImg.next();

        console.log(nextImg);
        console.log(first);

        if (nextImg.length) {
            curImg.removeClass('active2');
            nextImg.addClass('active2');
        } else {
            curImg.removeClass('active2');
            first.addClass('active2');
        }
    }
    setInterval(function() {
        slider();
    }, 5000);
})



