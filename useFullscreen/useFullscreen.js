export const useFullscreen = (callback) => {
  const element = useRef();
  const runCallback = (isFull) => {
    if (typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    const { current } = element;
    if (current) {
      if (current.requestFullscreen) {
        current.requestFullscreen();
      } else if (current.mozRequestFullScreen) {
        current.mozRequestFullScreen();
      } else if (current.webkitRequestFullscreen) {
        current.webkitRequestFullscreen();
      } else if (current.msRequestFullscreen) {
        current.msRequestFullscreen();
      }
    }
    runCallback(true);
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCallback(false);
  };
  return { element, triggerFull, exitFull };
};
