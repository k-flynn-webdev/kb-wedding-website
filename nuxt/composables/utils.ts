import { ref } from "vue";

export const performAction = async (loadingRef: Ref, cb: Function) => {
  if (loadingRef.value) return;

  loadingRef.value = true;
  return await cb().finally(() => (loadingRef.value = false));
};

/*
	This is the typical debounce function that receives
	the "callback" and the time it will wait to emit the event
*/
export function debounceAction(cb: Function, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
}

export function preDebounceAction(
  preCB: Function,
  cb: Function,
  timeout = 300
) {
  let timer;

  return (...args) => {
    preCB();
    clearTimeout(timer);

    timer = setTimeout(() => {
      cb.apply(this, args);
    }, timeout);
  };
}

export const useLoading = () => {
  const pending = ref(false);

  const setPending = () => {
    pending.value = true;
  };

  const clearPending = () => {
    pending.value = false;
  };

  return {
    pending,
    setPending,
    clearPending,
  };
};

export const useError = () => {
  const error = ref(null);

  const setError = (e: Object) => {
    error.value = e;
  };

  const clearError = () => {
    error.value = null;
  };

  return {
    error,
    setError,
    clearError,
  };
};
