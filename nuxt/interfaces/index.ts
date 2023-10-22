interface defaultCreateUpdateDelete {
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface colorHSL {
  h: number;
  s: number;
  l: number;
}

export interface User {
  userId: string;
  email: string;
  emailVerified: boolean;
}

export interface DateItem extends defaultCreateUpdateDelete {
  id: string;
  user_id: string;
  event_id: string;
  place_id: string;
  date_time: string;
}
