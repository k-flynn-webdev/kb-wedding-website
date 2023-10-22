import { useLoading, useError } from "@/composables/utils";
import { API_ROUTE, API_CREATE_ROUTE, TYPE_EVENT } from "@/consts";

const API_CREATE_URL = API_CREATE_ROUTE(TYPE_EVENT);

export const useEventData = () => {
  const { pending, setPending, clearPending } = useLoading();
  const { error, setError, clearError } = useError();

  const initEvent = () => {
    return {
      name: "",
      description: "",
    };
  };

  const eventData = useState<Object>("eventData", () => {
    return initEvent();
  });

  const setEventData = async (response: Object) => {
    eventData.value = { ...eventData.value, ...toValue(response) };
  };

  const clearEventData = () => {
    eventData.value = initEvent();
  };

  const createEventAPI = async () => {
    setPending();
    clearError();

    return await useFetch(API_CREATE_URL)
      .then(({ data }) => setEventData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getEventAPI = async (event_id: String) => {
    setPending();
    clearError();
    clearEventData();

    return await useFetch(API_ROUTE(TYPE_EVENT, event_id), {
      method: "GET",
    })
      .then(({ data }) => setEventData(data.value[0]))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const patchEventAPI = async (event_id: String, field: string | null) => {
    setPending();
    clearError();

    const body =
      field && field.length
        ? { [field]: eventData.value[field] }
        : eventData.value;

    return await useFetch(API_ROUTE(TYPE_EVENT, event_id), {
      method: "PATCH",
      body,
    })
      .then(({ data }) => setEventData(data.value[0]))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const deleteEventAPI = async (event_id: string | null) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_EVENT, event_id), { method: "DELETE" })
      .then(() => clearEventData())
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  return {
    pending,
    error,
    eventData,
    setEventData,
    clearEventData,
    getEventAPI,
    createEventAPI,
    patchEventAPI,
    deleteEventAPI,
  };
};
