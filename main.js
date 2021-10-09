function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot()
{
    speak();
    save('snapshot_taken.png')
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "Selfie Taken";
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis)
}