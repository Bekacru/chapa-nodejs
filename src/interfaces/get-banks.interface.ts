interface Data {
  id: string;
  swift: string;
  name: string;
  acct_length: number;
  country_id: number;
  created_at: Date;
  updated_at: Date;
  is_mobilemoney: boolean | null;
  currency: 'ETB' | 'USD';
}

export interface GetBanksResponse {
  message: string;
  data: Data[];
}
