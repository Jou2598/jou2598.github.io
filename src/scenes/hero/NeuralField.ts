import * as THREE from 'three';

export class NeuralField extends THREE.Group {
  points: THREE.Points;

  constructor(count = 2200) {
    super();
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - .5) * 3;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    this.points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: 0x9bbcff,
        size: 0.018,
        transparent: true,
        opacity: .55
      })
    );

    this.add(this.points);
  }

  update(time:number) {
    this.rotation.y = time * 0.05;
    this.points.rotation.x = Math.sin(time * .2) * .08;
  }
}
