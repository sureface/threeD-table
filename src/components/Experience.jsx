import {OrbitControls, Stage} from "@react-three/drei";
import {Table} from "./Table.jsx";
import {useConfigurator} from "../contexts/Configurator.jsx";

export const Experience = () => {
    const {legs} = useConfigurator()
  return (
    <>
        <Stage
            intensity={1.5}
            environment="city"
            shadows={{ type: 'accumulative', color: '#d9AFD9', colorBlend: 2, opacity: 2 }}
            adjustCamera={2}
        >
            <Table />
        </Stage>
        <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
        />
    </>
  );
};
