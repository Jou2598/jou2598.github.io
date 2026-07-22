import * as THREE from 'three';

export class ParticleField {
  points: THREE.Points;

  constructor(count = 1800) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 12;
      positions[i*3] = (Math.random()-.5) * r;
      positions[i*3+1] = (Math.random()-.5) * r;
      positions[i*3+2] = (Math.random()-.5) * r;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));

    this.points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color:0x829cff,
        size:.018,
        transparent:true,
        opacity:.65
      })
    );
  }

  update(time:number){
    this.points.rotation.y = time * .00002;
  }
}
