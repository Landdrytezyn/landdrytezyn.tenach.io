$(document).ready(function() {
		// open modal
		$('#open_modal').click(function() {
			$('#modal_to_open').css(
				{
					'display': 'block'
				}
			);
		});

		// close modal 
		$('#close_modal').click(function() {
			$('#modal_to_open').css(
				{
					'display': 'none'
				}
			);
		});

		// sent mail with ajax

		$('#send_email').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			prenom: $('#prenom').val(),
			nom: $('#nom').val(),
			objet: $('#objet').val(),
			message: $('#message').val()
		};
		//ajax
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'});
					$('#email').val("");
					$('#prenom').val("");
					$('#nom').val("");
					$('#objet').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#email').val("");
					$('#prenom').val("");
					$('#nom').val("");
					$('#objet').val("");
					$('#message').val("")
				}, 3000);
			}
		});
	});

});
