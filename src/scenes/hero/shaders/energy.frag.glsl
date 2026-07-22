uniform float uTime;

void main(){
  float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
  vec3 color = vec3(0.55,0.72,1.0) * pulse;
  gl_FragColor = vec4(color,0.75);
}
