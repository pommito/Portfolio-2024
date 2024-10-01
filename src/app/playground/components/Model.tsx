export default function Model() {
  return (
    <mesh>
      <planeGeometry args={[5, 5, 15, 15]} />
      <meshBasicMaterial color={'red'} wireframe />
    </mesh>
  );
}
