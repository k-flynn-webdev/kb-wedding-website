import { useLoading, useError } from "@/composables/utils";
import {
  API_ROUTE,
  API_CREATE_ROUTE,
  API_GET_ALL_EVENT_RESOUCES,
  TYPE_PLACE,
} from "@/consts";

const API_CREATE_URL = API_CREATE_ROUTE(TYPE_PLACE);

export const usePlaceData = () => {
  const { pending, setPending, clearPending } = useLoading();
  const { error, setError, clearError } = useError();

  const initPlace = () => {
    return [];
  };

  const placeData = useState<Array>("placeData", () => {
    return initPlace();
  });

  const setPlaceData = async (response: Array) => {
    response.forEach((item) => placeData.value.push(item));
  };

  const patchPlaceData = async (response: Object) => {
    placeData.value = placeData.value.map((item) => {
      if (item.id === response.id) {
        return { ...item, ...toValue(response) };
      } else {
        return item;
      }
    });
  };

  const deletePlaceData = async (response: Object) => {
    placeData.value = placeData.value.filter((item) => item.id !== response.id);
  };

  const clearPlaceData = () => {
    placeData.value = initPlace();
  };

  const createPlaceAPI = async (event_id: String) => {
    setPending();
    clearError();

    return await useFetch(API_CREATE_URL, {
      method: "POST",
      body: { event_id },
    })
      .then(({ data }) => setPlaceData([data.value]))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getEventPlacesAPI = async (event_id: String) => {
    setPending();
    clearError();

    return await useFetch(API_GET_ALL_EVENT_RESOUCES(TYPE_PLACE, event_id), {
      method: "GET",
    })
      .then(({ data }) => {
        clearPlaceData();
        setPlaceData(data.value);
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getPlaceAPI = async (place_id: String) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_PLACE, place_id), {
      method: "GET",
    })
      .then(({ data }) => setPlaceData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const patchPlaceAPI = async (place: Object, field: string | null) => {
    setPending();
    clearError();

    const body = field && field.length ? { [field]: place[field] } : place;

    return await useFetch(API_ROUTE(TYPE_PLACE, place.id), {
      method: "PATCH",
      body,
      watch: false,
    })
      .then(({ data }) => patchPlaceData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const deletePlaceAPI = async (place_id: string) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_PLACE, place_id), { method: "DELETE" })
      .then(() => deletePlaceData({ id: place_id }))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  return {
    pending,
    error,
    placeData,
    setPlaceData,
    clearPlaceData,
    getEventPlacesAPI,
    getPlaceAPI,
    createPlaceAPI,
    patchPlaceAPI,
    deletePlaceAPI,
  };
};
