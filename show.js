window.onload = () => {
  init()
}

function init() {

const width = 600;
const height = 400;

let yaw = document.getElementById('yaw_box');
let pitch = document.getElementById('pitch_box');
let trans_x = document.getElementById('trans_x_box');
let trans_y = document.getElementById('trans_y_box');
let trans_z = document.getElementById('trans_z_box');
let scale_x = document.getElementById('scale_x_box');
let scale_y = document.getElementById('scale_y_box');
let scale_z = document.getElementById('scale_z_box');

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#myCanvas')
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xEFEFEF );
scene.add(new THREE.GridHelper(501, 501));
scene.add(new THREE.AxesHelper(500));

const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(6, 6, 6);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = [
  new THREE.MeshLambertMaterial({color:0xF49C50,opacity:0.9,transparent:true}),
  new THREE.MeshLambertMaterial({color:0xC87736,opacity:0.9,transparent:true}),
  new THREE.MeshLambertMaterial({color:0x7FFF80,opacity:0.9,transparent:true}),
  new THREE.MeshLambertMaterial({color:0x407F40,opacity:0.9,transparent:true}),
  new THREE.MeshLambertMaterial({color:0x8080FF,opacity:0.9,transparent:true}),
  new THREE.MeshLambertMaterial({color:0x40407F,opacity:0.9,transparent:true})
];
// 8080FF, 40407F
// F49C50, C87736
// 7FFF80, 407F40

const box = new THREE.Mesh(geometry, material);
scene.add(box);


const light = new THREE.AmbientLight(0xFFFFFF, 1);
scene.add(light);

tick();

function tick() {
  requestAnimationFrame(tick);

  box.scale.set(scale_z.value,scale_y.value,scale_x.value);
  box.position.x = Number(trans_z.value)
  box.position.y = Number(trans_y.value)
  box.position.z = Number(trans_x.value)
  box.rotation.y = 0.0 - Number(yaw.value) * 2 * Math.PI / 360;
  box.rotation.z = 0.0 - Number(pitch.value) * 2 * Math.PI / 360;

  // レンダリング
  renderer.render(scene, camera);
}
}