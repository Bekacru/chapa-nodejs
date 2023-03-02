import { SplitType } from '../enums';

export interface CreateSubaccountOptions {
  business_name: string;
  account_name: string;
  id: string;
  account_number: string;
  split_type: SplitType;
  split_value: number;
}

export interface CreateSubaccountResponse {
  message: string;
  status: string;
  data: { subaccount_id: string };
}
