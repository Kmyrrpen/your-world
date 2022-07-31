import { useSnapshot } from "valtio";
import { worldStore } from "@/app/world/store";

const HomePage: React.FC = () => {
  const { files } = useSnapshot(worldStore);

  return (
    <div>
      <ul>
        <h1>Your Files</h1>
        {Object.keys(files).map((key) => (
          <li>
            <h2>{files[key].name}</h2>
            <p>{files[key].description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;