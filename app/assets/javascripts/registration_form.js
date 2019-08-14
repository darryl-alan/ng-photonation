$(document).on('turbolinks:load', function (e) {
	let showError, stripeResponseHandler, submitHandler;
	submitHandler = function (e) {
		var $form = $(e.target);
		$form.find("input[type=submit]").prop("disabled", true);
		//If Stripe was initialized correctly this will create a token using the credit card info
		if (Stripe) {
			Stripe.card.createToken($form, stripeResponseHandler);
		} else {
			showError("Failed to load credit card processing functionality. Please reload this page.")
		}
		return false;
	};


	$(".credit-card-form").on('submit', submitHandler);

	stripeResponseHandler = function (status, response) {
		var token, $form;
		$form = $('.credit-card-form');
		if (response.error) {
			console.log(response);
			show_error(response.error.message);
			$form.find("input[type=submit]").prop("disabled", false);
		} else {
			token = response.id;
			$form.append($('<input type="hidden" name="payment[token]" />').val(token));
			$("[data-stripe=number]").remove();
			$("[data-stripe=cvc]").remove();
			$("[data-stripe=exp-year]").remove();
			$("[data-stripe=exp-month]").remove();
			$("[data-stripe=label]").remove();
			$form.get(0).submit();
		}
		return false;
	};

	showError = function (message) {
		if ($("#flash-messages").size() < 1) {
			$('div.container.main div:first').prepend("<div id='flash-messages'></div>")
		}
		$("#flash-messages").html('<div class="alert alert-warning"><a class="close" data-dismiss="alert">×</a><div id="flash_alert">' + message + '</div></div>');
		$('.alert').delay(5000).fadeOut(3000);
		return false;
	};
});