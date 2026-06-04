import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (camera: THREE.PerspectiveCamera) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        console.log("Starting character decryption...");
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        console.log("Character decrypted, creating blob URL...");
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));
        console.log("Blob URL created, loading GLTF...");

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            console.log("GLTF loaded, preparing character...");
            character = gltf.scene;
            // Note: Removing renderer.compileAsync as it was blocking the loading
            // Compilation will happen automatically on first render
            console.log("Character prepared successfully");
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;

                // Change clothing colors to match site theme
                if (mesh.material) {
                  if (mesh.name === "BODY.SHIRT") { // The shirt mesh
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#8B4513");
                    mesh.material = newMat;
                  } else if (mesh.name === "Pant") {
                    const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                    newMat.color = new THREE.Color("#000000");
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        console.error("Error in loadCharacter:", err);
        reject(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
