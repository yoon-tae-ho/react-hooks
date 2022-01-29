export const usePreventLeave = (message = "") => {
  const handler = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", handler);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", handler);

  return { enablePrevent, disablePrevent };
};
