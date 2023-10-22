import { colorHSL, User } from "@/interfaces";

export const ID_LENGTH: number = 15;
export const inputDelay: number = 250;

export const API_ROUTE = (type: string, resource?: string): string =>
  resource ? `/api/${type}/${resource}/` : `/api/${type}/`;

export const API_CREATE_ROUTE = (type: string): string =>
  `/api/${type}/create/`;

export const API_GET_ALL_EVENT_RESOUCES = (
  type: string,
  resource: string
): string => `/api/event/${resource}/${type}`;

export const TYPE_EVENT: string = "event";
export const TYPE_PLACE: string = "place";
export const TYPE_DATE_TIME: string = "date-time";
export const TYPE_VOTE: string = "vote";

export const USER_ANOM: User = {
  userId: "",
  email: "",
  emailVerified: false,
};

export const AVATAR_HSL: colorHSL = {
  h: 0,
  s: 95,
  l: 30,
};
