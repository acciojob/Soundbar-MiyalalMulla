//your JS code here. If required.
let sounds = ['applause', 'boo','gasp','tada','victory',"wrong","stop"];
const buttons = document.getElementById("buttons");

sounds.forEach((sound)=>{
	const audio = document.createElement("audio");
	audio.id=sound;
	audio.src = `./sounds/${sound}.mp3`;
	audio.preload = 'auto';
	document.body.appendChild(audio);

	//visible button
	const btn = document.createElement('button');
	btn.className = "btn";
	btn.textContent = sound;

	btn.addEventListener("click",()=>{
		stopSounds();
	    const el = document.getElementById(sound);
	    el.currentTime = 0;
	    const p = el.play();
	});
	buttons.appendChild(btn);
});
const stopBtn = document.createElement("button");
stopBtn.className = 'stop';
stopBtn.textContent = 'stop';
stopBtn.addEventListener("click", stopSounds);
buttons.appendChild(stopBtn);
function stopSounds(){
	sounds.forEach((sound)=>{
		const el = document.getElementById(sound);
		el.pause();
		el.currentTime = 0;
	});
}
