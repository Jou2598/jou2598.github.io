uniform float uTime;

varying vec3 vNormal;

void main(){
  vNormal = normal;
  vec3 pos = position;
  pos += normal * sin(uTime + position.y * 4.0) * 0.015;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}
