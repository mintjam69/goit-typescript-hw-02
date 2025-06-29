import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <ClipLoader
        loading={true}
        size={80}
        color="#646cff"
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loader;
