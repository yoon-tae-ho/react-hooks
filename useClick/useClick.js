export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    const current = element.current;
    if (current) {
      current.addEventListener("click", onClick);
    }
    return () => {
      current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};
