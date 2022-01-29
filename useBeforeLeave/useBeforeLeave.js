export const useBeforeLeave = (onBefore) => {
  const ref = useRef();
  if (typeof onBefore !== "function") {
    return;
  }
  const handler = (event) => {
    onBefore();
  };
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("mouseleave", handler);
    return () => element.removeEventListener("mouseleave", handler);
  }, []);
  return ref;
};
