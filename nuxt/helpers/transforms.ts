import { GuestData } from "~/interfaces";

export const transformGuestAPI = (data: GuestData[]) => {
  return data.map((item: GuestData) => ({
    ...item,
    attending: !!item.attending,
    is_kid: !!item.is_kid,
    high_chair: !!item.high_chair,
  }));
};
