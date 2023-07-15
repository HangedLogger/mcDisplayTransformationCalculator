// function init_main() {
//     yaw_box.value = '0';
//     yaw_slide.value = '0';
//     pitch_box.value = '0';
//     pitch_slide.value = '0';
// }

function run(){
    const pi = Math.PI
    var theta1 = 0.0 - Number(yaw_box.value) * 2 * pi / 360;
    var theta2 = 0.0 - Number(pitch_box.value) * 2 * pi / 360;

    var a1 = Math.cos(theta1/2);
    var b1 = 0.;
    var c1 = 0.;
    var d1 = Math.sin(theta1/2);

    var a2 = Math.cos(theta2/2);
    var b2 = Math.sin(theta1)*Math.sin(theta2/2);
    var c2 = 0.0 - Math.sin(theta1)*Math.sin(theta2/2);
    var d2 = 0.;

    var x = a1*b2 + b1*a2 + c1*d2 - d1*c2;
    var y = a1*c2 - b1*d2 + c1*a2 + d1*b2;
    var z = a1*d2 + b1*c2 - c1*b2 + d1*a2;
    var w = a1*a2 - b1*b2 - c1*c2 - d1*d2;
    
    var x_out = y.toFixed(4).toString();
    var y_out = z.toFixed(4).toString();
    var z_out = x.toFixed(4).toString();
    var w_out = w.toFixed(4).toString();

    var leftRotation = '[0.0000f,0.0000f,0.0000f,1.0000f]';
    var rightRotation = '[' + x_out + 'f,' + y_out + 'f,' + z_out + 'f,' + w_out + 'f' + ']';
    var translation = '[' + trans_x.value + 'f,' + trans_y.value + 'f,' + trans_z.value + 'f' + ']';
    var scale = '[' + scale_x.value + 'f,' + scale_y.value + 'f,' + scale_z.value + 'f' + ']';
    outputText.value = '{left_rotation:' + leftRotation + ',right_rotation:' + rightRotation + ',translation:' + translation + ',scale:' + scale + '}'
}

function setSlideVal(){
    var yaw = Number(yaw_box.value);

    while ( yaw > 180 ){
        yaw -= 360;
    }
    while ( yaw < -180 ){
        yaw += 360;
    }

    yaw_box.value = yaw.toString();
    yaw_slide.value = yaw.toString();
}
function setBoxVal(){
    yaw_box.value = yaw_slide.value;
}

let yaw_box = document.getElementById('yaw_box');
let yaw_slide = document.getElementById('yaw_slide');
let pitch = document.getElementById('pitch');
let outputText = document.getElementById('outputText');

let trans_x = document.getElementById('trans_x_box');
let trans_y = document.getElementById('trans_y_box');
let trans_z = document.getElementById('trans_z_box');

let scale_x = document.getElementById('scale_x_box');
let scale_y = document.getElementById('scale_y_box');
let scale_z = document.getElementById('scale_z_box');

let runButton = document.getElementById('runButton');

runButton.addEventListener('click', run);
yaw_box.addEventListener('change', setSlideVal);
yaw_slide.addEventListener('change', setBoxVal);


// 3edbf0, 34B7C8
// F49C50, C87736
// 93E7A8, 649E72