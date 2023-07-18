let text=document.querySelector("textarea");
let sbutton=document.querySelector("button")




sbutton.addEventListener('click',e=>{
    e.preventDefault();
    if(text.value!="")
    {
        let utterance = new SpeechSynthesisUtterance();
        utterance.text = text.value;
        utterance.voice = window.speechSynthesis.getVoices()[0];

        window.speechSynthesis.speak(utterance);
    }
})