$(document).ready(() => {

	function createMessageElement(sender, message) {
		var element = $.parseHTML(
			`<li class="left clearfix">
				<span class="chat-img pull-left">` +
					(sender == "B"?
						`<img src="http://placehold.it/50/55C1E7/fff&text=B" alt="Bot Avatar" class="img-circle" />`:
						`<img src="http://placehold.it/50/FA6F57/fff&text=U" alt="User Avatar" class="img-circle" />`) +
				`</span>
				<div class="chat-body clearfix">
					<div class="header">
						<strong class="primary-font">` + (sender == "B"? "Bot": "You")  + `</strong>
					</div>
					<p class="text">` + message + `</p>
				</div>
			</li>`);

			return element;
		}

		function encodeHTML(s) {
			return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
		}

		function sendMessage() {
			const text = encodeHTML($("#btn-input").val())
			if(text.trim() != 0) {
				$("#chat").append(createMessageElement("U", text))
				$("#btn-input").val("")

				$.post("/message", JSON.stringify({text: text}) , null, "json")
				.done((data) => {
					$("#chat").append(createMessageElement("B", data.response))
				});
			}
		}

		$("#btn-chat").click(sendMessage);

		$("#chat").append(createMessageElement("B", "Hey there! Type your message below to chat with me!"))

	});
