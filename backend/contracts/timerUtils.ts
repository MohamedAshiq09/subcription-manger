export const createTimer = (interval: number, callback: () => void) => {
    return setInterval(callback, interval * 1000);
  };
  
  export const clearTimer = (timerId: NodeJS.Timeout) => {
    clearInterval(timerId);
  };
  