import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | The PlayGround`;
  }, [title]);
};
export default useTitle;
