var url = "	https://api.adviceslip.com/advice";
var id = document.getElementById("advice-id");
var message = document.getElementById("advice-message");

function getAdvice() {
  axios.get(url).then((res) => {
    var message_api = res.data.slip.advice;
    var id_api = res.data.slip.id;

    id.innerHTML = id_api;
    message.innerHTML = message_api;
  });
}
