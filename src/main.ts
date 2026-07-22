import * as THREE from 'three';
import { gsap } from 'gsap';
import Lenis from 'lenis';

const lenis = new Lenis();
function frame(time:number){ lenis.raf(time); requestAnimationFrame(frame); }
requestAnimationFrame(frame);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(1,0.28,180,32);
const material = new THREE.MeshPhysicalMaterial({
 color:0x9bbcff,
 transmission:0.8,
 roughness:0.15,
 metalness:0.2,
 clearcoat:1
});
const core = new THREE.Mesh(geometry,material);
scene.add(core);

const particles = new THREE.Points(
 new THREE.BufferGeometry().setFromPoints(
  Array.from({length:1500},()=>new THREE.Vector3((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*8))
 ),
 new THREE.PointsMaterial({color:0xffffff,size:.012,transparent:true,opacity:.7})
);
scene.add(particles);

gsap.from(core.scale,{x:0,y:0,z:0,duration:2,ease:'expo.out'});

function animate(){
 requestAnimationFrame(animate);
 core.rotation.x += .002;
 core.rotation.y += .004;
 particles.rotation.y += .0005;
 renderer.render(scene,camera);
}
animate();

addEventListener('resize',()=>{
 camera.aspect=innerWidth/innerHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(innerWidth,innerHeight);
});
