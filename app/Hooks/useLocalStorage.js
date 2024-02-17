function useLocalStorage(key) {
  function Insert(value) {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  }

  function Retriev() {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch (error) {
        console.log(error);
      }
    }
  }

  function Remove() {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return { Insert, Retriev, Remove };
}

export default useLocalStorage;