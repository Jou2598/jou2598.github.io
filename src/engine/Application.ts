import * as THREE from 'three';
import { createRenderer } from './renderer';
import { createCamera } from './camera';
import { HeroScene } from '../scenes/hero/HeroScene';

export class Application {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private clock = new THREE.Clock();

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = createRenderer(canvas);
    this.camera = createCamera();
    this.scene = new THREE.Scene();

    const hero = new HeroScene();
    this.scene.add(hero.group);
  }

  start() {
    this.animate();
    window.addEventListener('resize', () => this.resize());
  }

  private animate = () => {
    requestAnimationFrame(this.animate);

    const delta = this.clock.getDelta();
    this.scene.rotation.y += delta * 0.05;

    this.renderer.render(this.scene, this.camera);
  };

  private resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
