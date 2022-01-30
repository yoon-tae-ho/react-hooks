export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handler = () => {
    if (onChange) {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    };
  }, []);
  return status;
};
