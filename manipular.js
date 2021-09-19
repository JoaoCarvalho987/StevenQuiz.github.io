const per = {
    p1:"No início da série, antes do aniversário de Steven, quantos anos ele tinha?",
    p2: "Porque Ametista é 'defeituosa'?",
    p3: "Qual é a arqui-inimiga de Peridot?",
    p4: "No aniversário de Steven, Connie ficou surpresa ao saber que, enquanto ele estava fazendo 14 anos, ela ainda tinha:",
    p5: "Na banda de Sadie ela se chamava 'Sadie Killer', mas seu nome real era:"
}

function clica(qual){
	var elemento = document.getElementById("clica1")
	var elemento2 = document.getElementById("clica2")
	var elemento3 = document.getElementById("clica3")
	var elemento4 = document.getElementById("clica4")
	if (qual == 1){
		elemento.style.backgroundColor = "#6959CD";
		elemento2.style.backgroundColor = "#F29F05";
		elemento3.style.backgroundColor = "#F29F05";
		elemento4.style.backgroundColor = "#F29F05";
	} else if (qual == 2){
		elemento.style.backgroundColor = "#F29F05";
		elemento2.style.backgroundColor = "#6959CD";
		elemento3.style.backgroundColor = "#F29F05";
		elemento4.style.backgroundColor = "#F29F05";
	}else if (qual == 3){
		elemento.style.backgroundColor = "#F29F05";
		elemento2.style.backgroundColor = "#F29F05";
		elemento3.style.backgroundColor = "#6959CD";
		elemento4.style.backgroundColor = "#F29F05";
	} else{
		elemento.style.backgroundColor = "#F29F05";
		elemento2.style.backgroundColor = "#F29F05";
		elemento3.style.backgroundColor = "#F29F05";
		elemento4.style.backgroundColor = "#6959CD";
	}
}



const rad = document.getElementsByName("optradio")

const resp1 = {a:"11 anos", b:"13 anos", c:"12 anos", d:"14 anos"}
const resp2 = {a:"Ela sofreu um acidente ao emergir", b:"As diamantes não gostavam dela", c:"Ela emergiu atrasada", d:"Ela nasceu em um planeta sem nutrientes"}
const resp3 = {a:"Lápis-lazúli", b:"Diamante amarelo", c:"Jasper", d:"Garnet"}
const resp4 = {a:"12 anos", b:"13 anos", c:"10 anos", d:"9 anos"}
const resp5 = {a:"Saide Piller", b:"Saedi Piller", c:"Sadei Killer", d:"Sadie Miller"}
const rp1 = resp1.b
const rp2 = resp2.c
const rp3 = resp3.b
const rp4 = resp4.a
const rp5 = resp5.d

const rp = [rp1, rp2, rp3, rp4, rp5]

function armazenar1(){
    for(let i = 0; i<rad.length; i++){
        if (rad[i].checked == true){
            var respostas1 = (rad[i].value)
            verificar(1, respostas1)
            
        }
    }
    
}
function armazenar2(){
    for(let i = 0; i<rad.length; i++){
        if (rad[i].checked == true){
            var respostas2 = rad[i].value
            verificar(2, respostas2)
        }
    }
}
function armazenar3(){
    for(let i = 0; i<rad.length; i++){
        if (rad[i].checked == true){
            var respostas3 = rad[i].value
            verificar(3, respostas3)
        }
    }
    
}
function armazenar4(){
    for(let i = 0; i<rad.length; i++){
        if (rad[i].checked == true){
            var respostas4 = rad[i].value
            verificar(4, respostas4)
        }
    }
    
}
function armazenar5(){
    for(let i = 0; i<rad.length; i++){
        if (rad[i].checked == true){
            var respostas5 = rad[i].value
            verificar(5, respostas5)
        }
    }
    
}

function verificar(questao, resposta){
    if (questao == 1){
        if (resp1[resposta] == rp[0]){
            localStorage.setItem('pontuacao', 20)
        } else{
            localStorage.setItem('pontuacao', 0)
        }
        
    } else if(questao == 2){
        if (resp2[resposta] == rp[1]){
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao'))+20)
        }else{
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao')))
        }
       

    } else if(questao == 3){
        if (resp3[resposta] == rp[2]){
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao'))+20)
        }else{
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao')))
        }
        
    } else if(questao == 4){
        if (resp4[resposta] == rp[3]){
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao'))+20)
            
        }else{
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao')))
        }
        
    } else {
        if (resp5[resposta] == rp[4]){
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao'))+20)
            
        }else{
            localStorage.setItem('pontuacao', JSON.parse(localStorage.getItem('pontuacao')))
        }
        
    }
}

function final(){
    let pon = document.getElementById("pont")

    pon.innerHTML = localStorage.getItem('pontuacao')
}

function rb1(){

    localStorage.setItem('pontuacao', 0)

    
    let perg = document.getElementById("perg")
    let ra1 = document.getElementById("rd1")
    let ra2 = document.getElementById("rd2")
    let ra3 = document.getElementById("rd3")
    let ra4 = document.getElementById("rd4")
    let pon = document.getElementById("pont")

    pon.innerHTML = localStorage.getItem('pontuacao')
    perg.innerHTML = per.p1
    ra1.innerHTML = resp1.a
    ra2.innerHTML = resp1.b
    ra3.innerHTML = resp1.c
    ra4.innerHTML = resp1.d
}
function rb2(){

    let perg = document.getElementById("perg")
    let ra1 = document.getElementById("rd1")
    let ra2 = document.getElementById("rd2")
    let ra3 = document.getElementById("rd3")
    let ra4 = document.getElementById("rd4")
    let pon = document.getElementById("pont")
    
    pon.innerHTML = localStorage.getItem('pontuacao')
    
    perg.innerHTML = per.p2
    ra1.innerHTML = resp2.a
    ra2.innerHTML = resp2.b
    ra3.innerHTML = resp2.c
    ra4.innerHTML = resp2.d
}

function rb3(){

    let perg = document.getElementById("perg")
    let ra1 = document.getElementById("rd1")
    let ra2 = document.getElementById("rd2")
    let ra3 = document.getElementById("rd3")
    let ra4 = document.getElementById("rd4")
    let pon = document.getElementById("pont")
    
    pon.innerHTML = localStorage.getItem('pontuacao')
    perg.innerHTML = per.p3
    ra1.innerHTML = resp3.a
    ra2.innerHTML = resp3.b
    ra3.innerHTML = resp3.c
    ra4.innerHTML = resp3.d
}
function rb4(){

    let perg = document.getElementById("perg")
    let ra1 = document.getElementById("rd1")
    let ra2 = document.getElementById("rd2")
    let ra3 = document.getElementById("rd3")
    let ra4 = document.getElementById("rd4")
    let pon = document.getElementById("pont")
    
    pon.innerHTML = localStorage.getItem('pontuacao')
    
    perg.innerHTML = per.p4
    ra1.innerHTML = resp4.a
    ra2.innerHTML = resp4.b
    ra3.innerHTML = resp4.c
    ra4.innerHTML = resp4.d
}
function rb5(){

    let perg = document.getElementById("perg")
    let ra1 = document.getElementById("rd1")
    let ra2 = document.getElementById("rd2")
    let ra3 = document.getElementById("rd3")
    let ra4 = document.getElementById("rd4")
    let pon = document.getElementById("pont")
    
    pon.innerHTML = localStorage.getItem('pontuacao')
    
    perg.innerHTML = per.p5
    ra1.innerHTML = resp5.a
    ra2.innerHTML = resp5.b
    ra3.innerHTML = resp5.c
    ra4.innerHTML = resp5.d
}



var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(0,0,0,", "rgba(100,100,100,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();


function festa(){
	confetti.start()
}