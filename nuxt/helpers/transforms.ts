import { GuestData } from "~/interfaces";

export const transformAttendingField = (data: any) => {
  if (data.attending === 1) {
    return true;
  }

  if (data.attending === 0 && data.created_at !== data.updated_at) {
    return false;
  }

  return "";
};

export const transformGuestAPI = (data: GuestData[]) => {
  return data.map((item: GuestData) => ({
    ...item,
    attending: transformAttendingField(item),
    is_kid: !!item.is_kid,
    high_chair: !!item.high_chair,
  }));
};
