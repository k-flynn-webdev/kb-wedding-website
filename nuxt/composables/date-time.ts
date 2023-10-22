import { DateItem } from "@/interfaces";

import { useLoading, useError } from "@/composables/utils";
import {
  API_ROUTE,
  API_CREATE_ROUTE,
  API_GET_ALL_EVENT_RESOUCES,
  TYPE_DATE_TIME,
} from "@/consts";

const API_CREATE_URL = API_CREATE_ROUTE(TYPE_DATE_TIME);

export const useDateTimeData = () => {
  const { pending, setPending, clearPending } = useLoading();
  const { error, setError, clearError } = useError();

  const initDateTime = () => {
    return {};
  };

  const dateTimeData = useState<Array>("dateTime", () => {
    return initDateTime();
  });

  const setDateTimeData = async (response: Array) => {
    dateTimeData.value = response.reduce((acc, cur) => {
      if (!acc[cur.place_id]) {
        acc[cur.place_id] = [];
      }

      acc[cur.place_id].push({ ...cur });

      return acc;
    }, dateTimeData.value);
  };

  const displayDateTime = (date_time_item: DateItem) => {
    const newDate = new Date(date_time_item.date_time);

    const monthString = Intl.DateTimeFormat("en", {
      month: "short",
    }).format(newDate);

    const timeString = Intl.DateTimeFormat("en", {
      timeStyle: "short",
    }).format(newDate);

    return `${timeString} ${newDate.getDate()} ${monthString} ${newDate.getFullYear()}`;
  };

  const patchDateTimeData = async (response: Object) => {
    setDateTimeData([response]);
  };

  const deleteDateTimeData = async (response: Object) => {
    const current = toValue(dateTimeData);

    current[response.place_id] = current[response.place_id].filter(
      (item) => item.id !== response.id
    );

    dateTimeData.value = current;
  };

  const clearDateTimeData = () => {
    dateTimeData.value = initDateTime();
  };

  const createDateTimeAPI = async (event_id: string, place_id: string) => {
    setPending();
    clearError();

    return await useFetch(API_CREATE_URL, {
      method: "POST",
      body: { event_id, place_id },
    })
      .then(({ data }) => {
        setDateTimeData([data.value]);
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getEventDateTimesAPI = async (event_id: string) => {
    setPending();
    clearError();

    return await useFetch(
      API_GET_ALL_EVENT_RESOUCES(TYPE_DATE_TIME, event_id),
      {
        method: "GET",
      }
    )
      .then(({ data }) => {
        clearDateTimeData();
        setDateTimeData(data.value);
      })
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const getDateTimeAPI = async (date_time_id: string) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_DATE_TIME, date_time_id), {
      method: "GET",
    })
      .then(({ data }) => setDateTimeData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const patchDateTimeAPI = async (dateTime: Object) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_DATE_TIME, dateTime.id), {
      method: "PATCH",
      body: dateTime,
      watch: false,
    })
      .then(({ data }) => patchDateTimeData(data.value))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  const deleteDateTimeAPI = async (dateTime: Object) => {
    setPending();
    clearError();

    return await useFetch(API_ROUTE(TYPE_DATE_TIME, dateTime.id), {
      method: "DELETE",
      watch: false,
    })
      .then(() => deleteDateTimeData(dateTime))
      .catch((e) => setError(e))
      .finally(() => clearPending());
  };

  return {
    pending,
    error,
    dateTimeData,
    displayDateTime,
    setDateTimeData,
    clearDateTimeData,
    createDateTimeAPI,
    getEventDateTimesAPI,
    getDateTimeAPI,
    patchDateTimeAPI,
    deleteDateTimeAPI,
  };
};
