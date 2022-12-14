const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
	rainDrops[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = '#0F0';
	context.font = fontSize + 'px monospace';

	for(let i = 0; i < rainDrops.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
		
		if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
			rainDrops[i] = 0;
        }
		rainDrops[i]++;
	}

	const myElement = document.getElementById("matrix");
    myElement.style.z-index("2");
	setTimeout(function(){
		console.log("Matrix")
	},3000);
    
   
};

setInterval(draw, 30);

// ------------------------------------- options code/decode - 64/cesar --------------------------------------
var radio = document.querySelectorAll(".radio");
var buttonResult = document.getElementById("btnResult");
var msg = document.getElementById("mensagem");
var key = document.getElementById("chave");
var result = document.getElementById("resultado");

buttonResult.addEventListener("click", function (event) {
  event.preventDefault();
  var cod = document.getElementById("codigo").value;
  if (cod == "cesar" && radio[0].checked) {
    var msgvalue = msg.value.split("");
    var keyvalue = parseInt(key.value);
    result.value = codeCesar(msgvalue, keyvalue);
  } else if (cod == "cesar" && radio[1].checked) {
    var msgvalue = msg.value.split("");
    var keyvalue = parseInt(key.value);
    result.value = decodeCesar(msgvalue, keyvalue);
  } else if (cod == "base64" && radio[0].checked) {
    var msgvalue = msg.value;
    result.value = btoa(msgvalue);
  } else {
    var msgvalue = msg.value;
    result.value = atob(msgvalue);
  }
});
// ------------------------------------- options code/decode - 64/cesar ---------------------------------------



// ------------------------------------ decode function cifra de cesar ----------------------------------
function decodeCesar(msg, key) {
  return msg
    .map((str) => {
      var entry = str.charCodeAt();
      if (entry >= 65 && entry <= 90) {
        if (entry - 65 - key < 0) {
          return String.fromCharCode(((entry - 65 - key + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entry - 65 - key) % 26) + 65);
        }
      } else if (entry >= 97 && entry <= 122) {
        if (entry - 97 - key < 0) {
          return String.fromCharCode(((entry - 97 - key + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entry - 97 - key) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");
}
// ------------------------------------ decode function cifra de cesar ----------------------------------



//-------------------------------------  code function cifra de cesar ------------------------------------
function codeCesar(msg, key) {
  return msg
    .map((str) => {
      var entry = str.charCodeAt();
      if (entry >= 65 && entry <= 90) {
        return String.fromCharCode(((entry - 65 + key) % 26) + 65);
      } else if (entry >= 97 && entry <= 122) {
        return String.fromCharCode(((entry - 97 + key) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}
//-------------------------------------  code function cifra de cesar ------------------------------------



// ----------------------------------------- display div -----------------------------------------
var keyDiv = document.querySelector(".keyDiv");
var codSelect = document.addEventListener("click", function () {
  var cod = document.getElementById("codigo").value;
  if (cod == "cesar") {
    keyDiv.style.display = "block";
  } else {
    keyDiv.style.display = "none";
  }
});