export const debounce = (fn, wait) => {
  let timeout;

  return function executeFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
};
