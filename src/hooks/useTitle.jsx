import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `The PlayGround | ${title}`;
  }, [title]);
};
export default useTitle;
