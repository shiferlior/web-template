import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  money: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "contracts" */
export type Contracts = {
  __typename?: 'contracts';
  arnona_pay_by_renters?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  electricity_pay_by_renters?: Maybe<Scalars['Boolean']>;
  end_date?: Maybe<Scalars['date']>;
  gas_pay_by_renters?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  internet_pay_by_renters?: Maybe<Scalars['Boolean']>;
  link_to_s3?: Maybe<Scalars['String']>;
  /** An array relationship */
  payments: Array<Payments>;
  /** An aggregated array relationship */
  payments_aggregate: Payments_Aggregate;
  /** An object relationship */
  property: Properties;
  property_id: Scalars['Int'];
  start_date?: Maybe<Scalars['date']>;
  /** An array relationship */
  tickets: Array<Tickets>;
  /** An aggregated array relationship */
  tickets_aggregate: Tickets_Aggregate;
  updated_at: Scalars['timestamptz'];
  vaad_pay_by_renters?: Maybe<Scalars['Boolean']>;
  water_pay_by_renters?: Maybe<Scalars['Boolean']>;
};


/** columns and relationships of "contracts" */
export type ContractsPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** columns and relationships of "contracts" */
export type ContractsPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** columns and relationships of "contracts" */
export type ContractsTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** columns and relationships of "contracts" */
export type ContractsTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** aggregated selection of "contracts" */
export type Contracts_Aggregate = {
  __typename?: 'contracts_aggregate';
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_Fields = {
  __typename?: 'contracts_aggregate_fields';
  avg?: Maybe<Contracts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};


/** aggregate fields of "contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contracts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contracts" */
export type Contracts_Aggregate_Order_By = {
  avg?: Maybe<Contracts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contracts_Max_Order_By>;
  min?: Maybe<Contracts_Min_Order_By>;
  stddev?: Maybe<Contracts_Stddev_Order_By>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Order_By>;
  sum?: Maybe<Contracts_Sum_Order_By>;
  var_pop?: Maybe<Contracts_Var_Pop_Order_By>;
  var_samp?: Maybe<Contracts_Var_Samp_Order_By>;
  variance?: Maybe<Contracts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contracts" */
export type Contracts_Arr_Rel_Insert_Input = {
  data: Array<Contracts_Insert_Input>;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};

/** aggregate avg on columns */
export type Contracts_Avg_Fields = {
  __typename?: 'contracts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contracts" */
export type Contracts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contracts_Bool_Exp>>>;
  _not?: Maybe<Contracts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contracts_Bool_Exp>>>;
  arnona_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  electricity_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
  end_date?: Maybe<Date_Comparison_Exp>;
  gas_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  internet_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
  link_to_s3?: Maybe<String_Comparison_Exp>;
  payments?: Maybe<Payments_Bool_Exp>;
  property?: Maybe<Properties_Bool_Exp>;
  property_id?: Maybe<Int_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  tickets?: Maybe<Tickets_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vaad_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
  water_pay_by_renters?: Maybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts" */
export enum Contracts_Constraint {
  /** unique or primary key constraint */
  ContractsPkey = 'contracts_pkey'
}

/** input type for incrementing integer column in table "contracts" */
export type Contracts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  property_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contracts" */
export type Contracts_Insert_Input = {
  arnona_pay_by_renters?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  electricity_pay_by_renters?: Maybe<Scalars['Boolean']>;
  end_date?: Maybe<Scalars['date']>;
  gas_pay_by_renters?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  internet_pay_by_renters?: Maybe<Scalars['Boolean']>;
  link_to_s3?: Maybe<Scalars['String']>;
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>;
  property?: Maybe<Properties_Obj_Rel_Insert_Input>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  tickets?: Maybe<Tickets_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vaad_pay_by_renters?: Maybe<Scalars['Boolean']>;
  water_pay_by_renters?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  __typename?: 'contracts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "contracts" */
export type Contracts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  __typename?: 'contracts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "contracts" */
export type Contracts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "contracts" */
export type Contracts_Mutation_Response = {
  __typename?: 'contracts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contracts>;
};

/** input type for inserting object relation for remote table "contracts" */
export type Contracts_Obj_Rel_Insert_Input = {
  data: Contracts_Insert_Input;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};

/** on conflict condition type for table "contracts" */
export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns: Array<Contracts_Update_Column>;
  where?: Maybe<Contracts_Bool_Exp>;
};

/** ordering options when selecting data from "contracts" */
export type Contracts_Order_By = {
  arnona_pay_by_renters?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  electricity_pay_by_renters?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  gas_pay_by_renters?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  internet_pay_by_renters?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>;
  property?: Maybe<Properties_Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  tickets_aggregate?: Maybe<Tickets_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  vaad_pay_by_renters?: Maybe<Order_By>;
  water_pay_by_renters?: Maybe<Order_By>;
};

/** primary key columns input for table: "contracts" */
export type Contracts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "contracts_renters_relation" */
export type Contracts_Renters_Relation = {
  __typename?: 'contracts_renters_relation';
  contract_id: Scalars['Int'];
  /** An object relationship */
  entity: Entities;
  /** An object relationship */
  entityByRenterId: Entities;
  guarantor_id: Scalars['Int'];
  guatanty_amount?: Maybe<Scalars['float8']>;
  property_section: Scalars['String'];
  renter_id: Scalars['Int'];
};

/** aggregated selection of "contracts_renters_relation" */
export type Contracts_Renters_Relation_Aggregate = {
  __typename?: 'contracts_renters_relation_aggregate';
  aggregate?: Maybe<Contracts_Renters_Relation_Aggregate_Fields>;
  nodes: Array<Contracts_Renters_Relation>;
};

/** aggregate fields of "contracts_renters_relation" */
export type Contracts_Renters_Relation_Aggregate_Fields = {
  __typename?: 'contracts_renters_relation_aggregate_fields';
  avg?: Maybe<Contracts_Renters_Relation_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Contracts_Renters_Relation_Max_Fields>;
  min?: Maybe<Contracts_Renters_Relation_Min_Fields>;
  stddev?: Maybe<Contracts_Renters_Relation_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Renters_Relation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Renters_Relation_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Renters_Relation_Sum_Fields>;
  var_pop?: Maybe<Contracts_Renters_Relation_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Renters_Relation_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Renters_Relation_Variance_Fields>;
};


/** aggregate fields of "contracts_renters_relation" */
export type Contracts_Renters_Relation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Aggregate_Order_By = {
  avg?: Maybe<Contracts_Renters_Relation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contracts_Renters_Relation_Max_Order_By>;
  min?: Maybe<Contracts_Renters_Relation_Min_Order_By>;
  stddev?: Maybe<Contracts_Renters_Relation_Stddev_Order_By>;
  stddev_pop?: Maybe<Contracts_Renters_Relation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contracts_Renters_Relation_Stddev_Samp_Order_By>;
  sum?: Maybe<Contracts_Renters_Relation_Sum_Order_By>;
  var_pop?: Maybe<Contracts_Renters_Relation_Var_Pop_Order_By>;
  var_samp?: Maybe<Contracts_Renters_Relation_Var_Samp_Order_By>;
  variance?: Maybe<Contracts_Renters_Relation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Arr_Rel_Insert_Input = {
  data: Array<Contracts_Renters_Relation_Insert_Input>;
  on_conflict?: Maybe<Contracts_Renters_Relation_On_Conflict>;
};

/** aggregate avg on columns */
export type Contracts_Renters_Relation_Avg_Fields = {
  __typename?: 'contracts_renters_relation_avg_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Avg_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contracts_renters_relation". All fields are combined with a logical 'AND'. */
export type Contracts_Renters_Relation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contracts_Renters_Relation_Bool_Exp>>>;
  _not?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contracts_Renters_Relation_Bool_Exp>>>;
  contract_id?: Maybe<Int_Comparison_Exp>;
  entity?: Maybe<Entities_Bool_Exp>;
  entityByRenterId?: Maybe<Entities_Bool_Exp>;
  guarantor_id?: Maybe<Int_Comparison_Exp>;
  guatanty_amount?: Maybe<Float8_Comparison_Exp>;
  property_section?: Maybe<String_Comparison_Exp>;
  renter_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts_renters_relation" */
export enum Contracts_Renters_Relation_Constraint {
  /** unique or primary key constraint */
  ContractsRentersRelationPkey = 'contracts_renters_relation_pkey'
}

/** input type for incrementing integer column in table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Inc_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Insert_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  entity?: Maybe<Entities_Obj_Rel_Insert_Input>;
  entityByRenterId?: Maybe<Entities_Obj_Rel_Insert_Input>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  property_section?: Maybe<Scalars['String']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Contracts_Renters_Relation_Max_Fields = {
  __typename?: 'contracts_renters_relation_max_fields';
  contract_id?: Maybe<Scalars['Int']>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  property_section?: Maybe<Scalars['String']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Max_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  property_section?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Renters_Relation_Min_Fields = {
  __typename?: 'contracts_renters_relation_min_fields';
  contract_id?: Maybe<Scalars['Int']>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  property_section?: Maybe<Scalars['String']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Min_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  property_section?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Mutation_Response = {
  __typename?: 'contracts_renters_relation_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Contracts_Renters_Relation>;
};

/** input type for inserting object relation for remote table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Obj_Rel_Insert_Input = {
  data: Contracts_Renters_Relation_Insert_Input;
  on_conflict?: Maybe<Contracts_Renters_Relation_On_Conflict>;
};

/** on conflict condition type for table "contracts_renters_relation" */
export type Contracts_Renters_Relation_On_Conflict = {
  constraint: Contracts_Renters_Relation_Constraint;
  update_columns: Array<Contracts_Renters_Relation_Update_Column>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};

/** ordering options when selecting data from "contracts_renters_relation" */
export type Contracts_Renters_Relation_Order_By = {
  contract_id?: Maybe<Order_By>;
  entity?: Maybe<Entities_Order_By>;
  entityByRenterId?: Maybe<Entities_Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  property_section?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "contracts_renters_relation" */
export type Contracts_Renters_Relation_Pk_Columns_Input = {
  contract_id: Scalars['Int'];
  renter_id: Scalars['Int'];
};

/** select columns of table "contracts_renters_relation" */
export enum Contracts_Renters_Relation_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  GuarantorId = 'guarantor_id',
  /** column name */
  GuatantyAmount = 'guatanty_amount',
  /** column name */
  PropertySection = 'property_section',
  /** column name */
  RenterId = 'renter_id'
}

/** input type for updating data in table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Set_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  property_section?: Maybe<Scalars['String']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Contracts_Renters_Relation_Stddev_Fields = {
  __typename?: 'contracts_renters_relation_stddev_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Stddev_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Renters_Relation_Stddev_Pop_Fields = {
  __typename?: 'contracts_renters_relation_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Stddev_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Renters_Relation_Stddev_Samp_Fields = {
  __typename?: 'contracts_renters_relation_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Stddev_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contracts_Renters_Relation_Sum_Fields = {
  __typename?: 'contracts_renters_relation_sum_fields';
  contract_id?: Maybe<Scalars['Int']>;
  guarantor_id?: Maybe<Scalars['Int']>;
  guatanty_amount?: Maybe<Scalars['float8']>;
  renter_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Sum_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** update columns of table "contracts_renters_relation" */
export enum Contracts_Renters_Relation_Update_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  GuarantorId = 'guarantor_id',
  /** column name */
  GuatantyAmount = 'guatanty_amount',
  /** column name */
  PropertySection = 'property_section',
  /** column name */
  RenterId = 'renter_id'
}

/** aggregate var_pop on columns */
export type Contracts_Renters_Relation_Var_Pop_Fields = {
  __typename?: 'contracts_renters_relation_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Var_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Renters_Relation_Var_Samp_Fields = {
  __typename?: 'contracts_renters_relation_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Var_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Renters_Relation_Variance_Fields = {
  __typename?: 'contracts_renters_relation_variance_fields';
  contract_id?: Maybe<Scalars['Float']>;
  guarantor_id?: Maybe<Scalars['Float']>;
  guatanty_amount?: Maybe<Scalars['Float']>;
  renter_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contracts_renters_relation" */
export type Contracts_Renters_Relation_Variance_Order_By = {
  contract_id?: Maybe<Order_By>;
  guarantor_id?: Maybe<Order_By>;
  guatanty_amount?: Maybe<Order_By>;
  renter_id?: Maybe<Order_By>;
};

/** select columns of table "contracts" */
export enum Contracts_Select_Column {
  /** column name */
  ArnonaPayByRenters = 'arnona_pay_by_renters',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ElectricityPayByRenters = 'electricity_pay_by_renters',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  GasPayByRenters = 'gas_pay_by_renters',
  /** column name */
  Id = 'id',
  /** column name */
  InternetPayByRenters = 'internet_pay_by_renters',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaadPayByRenters = 'vaad_pay_by_renters',
  /** column name */
  WaterPayByRenters = 'water_pay_by_renters'
}

/** input type for updating data in table "contracts" */
export type Contracts_Set_Input = {
  arnona_pay_by_renters?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  electricity_pay_by_renters?: Maybe<Scalars['Boolean']>;
  end_date?: Maybe<Scalars['date']>;
  gas_pay_by_renters?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  internet_pay_by_renters?: Maybe<Scalars['Boolean']>;
  link_to_s3?: Maybe<Scalars['String']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vaad_pay_by_renters?: Maybe<Scalars['Boolean']>;
  water_pay_by_renters?: Maybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Contracts_Stddev_Fields = {
  __typename?: 'contracts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "contracts" */
export type Contracts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Stddev_Pop_Fields = {
  __typename?: 'contracts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "contracts" */
export type Contracts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Stddev_Samp_Fields = {
  __typename?: 'contracts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "contracts" */
export type Contracts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contracts_Sum_Fields = {
  __typename?: 'contracts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  property_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "contracts" */
export type Contracts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** update columns of table "contracts" */
export enum Contracts_Update_Column {
  /** column name */
  ArnonaPayByRenters = 'arnona_pay_by_renters',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ElectricityPayByRenters = 'electricity_pay_by_renters',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  GasPayByRenters = 'gas_pay_by_renters',
  /** column name */
  Id = 'id',
  /** column name */
  InternetPayByRenters = 'internet_pay_by_renters',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VaadPayByRenters = 'vaad_pay_by_renters',
  /** column name */
  WaterPayByRenters = 'water_pay_by_renters'
}

/** aggregate var_pop on columns */
export type Contracts_Var_Pop_Fields = {
  __typename?: 'contracts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "contracts" */
export type Contracts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Var_Samp_Fields = {
  __typename?: 'contracts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "contracts" */
export type Contracts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Variance_Fields = {
  __typename?: 'contracts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "contracts" */
export type Contracts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "entities" */
export type Entities = {
  __typename?: 'entities';
  /** An array relationship */
  contractsRentersRelationsByRenterId: Array<Contracts_Renters_Relation>;
  /** An aggregated array relationship */
  contractsRentersRelationsByRenterId_aggregate: Contracts_Renters_Relation_Aggregate;
  /** An array relationship */
  contracts_renters_relations: Array<Contracts_Renters_Relation>;
  /** An aggregated array relationship */
  contracts_renters_relations_aggregate: Contracts_Renters_Relation_Aggregate;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  id_number: Scalars['String'];
  letter_address?: Maybe<Scalars['String']>;
  link_to_s3?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};


/** columns and relationships of "entities" */
export type EntitiesContractsRentersRelationsByRenterIdArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** columns and relationships of "entities" */
export type EntitiesContractsRentersRelationsByRenterId_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** columns and relationships of "entities" */
export type EntitiesContracts_Renters_RelationsArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** columns and relationships of "entities" */
export type EntitiesContracts_Renters_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};

/** aggregated selection of "entities" */
export type Entities_Aggregate = {
  __typename?: 'entities_aggregate';
  aggregate?: Maybe<Entities_Aggregate_Fields>;
  nodes: Array<Entities>;
};

/** aggregate fields of "entities" */
export type Entities_Aggregate_Fields = {
  __typename?: 'entities_aggregate_fields';
  avg?: Maybe<Entities_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Entities_Max_Fields>;
  min?: Maybe<Entities_Min_Fields>;
  stddev?: Maybe<Entities_Stddev_Fields>;
  stddev_pop?: Maybe<Entities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entities_Stddev_Samp_Fields>;
  sum?: Maybe<Entities_Sum_Fields>;
  var_pop?: Maybe<Entities_Var_Pop_Fields>;
  var_samp?: Maybe<Entities_Var_Samp_Fields>;
  variance?: Maybe<Entities_Variance_Fields>;
};


/** aggregate fields of "entities" */
export type Entities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Entities_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "entities" */
export type Entities_Aggregate_Order_By = {
  avg?: Maybe<Entities_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Entities_Max_Order_By>;
  min?: Maybe<Entities_Min_Order_By>;
  stddev?: Maybe<Entities_Stddev_Order_By>;
  stddev_pop?: Maybe<Entities_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Entities_Stddev_Samp_Order_By>;
  sum?: Maybe<Entities_Sum_Order_By>;
  var_pop?: Maybe<Entities_Var_Pop_Order_By>;
  var_samp?: Maybe<Entities_Var_Samp_Order_By>;
  variance?: Maybe<Entities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "entities" */
export type Entities_Arr_Rel_Insert_Input = {
  data: Array<Entities_Insert_Input>;
  on_conflict?: Maybe<Entities_On_Conflict>;
};

/** aggregate avg on columns */
export type Entities_Avg_Fields = {
  __typename?: 'entities_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "entities" */
export type Entities_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entities". All fields are combined with a logical 'AND'. */
export type Entities_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Entities_Bool_Exp>>>;
  _not?: Maybe<Entities_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Entities_Bool_Exp>>>;
  contractsRentersRelationsByRenterId?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
  contracts_renters_relations?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  id_number?: Maybe<String_Comparison_Exp>;
  letter_address?: Maybe<String_Comparison_Exp>;
  link_to_s3?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "entities" */
export enum Entities_Constraint {
  /** unique or primary key constraint */
  EntitiesPkey = 'entities_pkey'
}

/** input type for incrementing integer column in table "entities" */
export type Entities_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "entities" */
export type Entities_Insert_Input = {
  contractsRentersRelationsByRenterId?: Maybe<Contracts_Renters_Relation_Arr_Rel_Insert_Input>;
  contracts_renters_relations?: Maybe<Contracts_Renters_Relation_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_number?: Maybe<Scalars['String']>;
  letter_address?: Maybe<Scalars['String']>;
  link_to_s3?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Entities_Max_Fields = {
  __typename?: 'entities_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_number?: Maybe<Scalars['String']>;
  letter_address?: Maybe<Scalars['String']>;
  link_to_s3?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "entities" */
export type Entities_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_number?: Maybe<Order_By>;
  letter_address?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Entities_Min_Fields = {
  __typename?: 'entities_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_number?: Maybe<Scalars['String']>;
  letter_address?: Maybe<Scalars['String']>;
  link_to_s3?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "entities" */
export type Entities_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_number?: Maybe<Order_By>;
  letter_address?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** response of any mutation on the table "entities" */
export type Entities_Mutation_Response = {
  __typename?: 'entities_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Entities>;
};

/** input type for inserting object relation for remote table "entities" */
export type Entities_Obj_Rel_Insert_Input = {
  data: Entities_Insert_Input;
  on_conflict?: Maybe<Entities_On_Conflict>;
};

/** on conflict condition type for table "entities" */
export type Entities_On_Conflict = {
  constraint: Entities_Constraint;
  update_columns: Array<Entities_Update_Column>;
  where?: Maybe<Entities_Bool_Exp>;
};

/** ordering options when selecting data from "entities" */
export type Entities_Order_By = {
  contractsRentersRelationsByRenterId_aggregate?: Maybe<Contracts_Renters_Relation_Aggregate_Order_By>;
  contracts_renters_relations_aggregate?: Maybe<Contracts_Renters_Relation_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  id_number?: Maybe<Order_By>;
  letter_address?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
};

/** primary key columns input for table: "entities" */
export type Entities_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "entities" */
export enum Entities_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IdNumber = 'id_number',
  /** column name */
  LetterAddress = 'letter_address',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  Phone = 'phone'
}

/** input type for updating data in table "entities" */
export type Entities_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_number?: Maybe<Scalars['String']>;
  letter_address?: Maybe<Scalars['String']>;
  link_to_s3?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Entities_Stddev_Fields = {
  __typename?: 'entities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "entities" */
export type Entities_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Entities_Stddev_Pop_Fields = {
  __typename?: 'entities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "entities" */
export type Entities_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Entities_Stddev_Samp_Fields = {
  __typename?: 'entities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "entities" */
export type Entities_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Entities_Sum_Fields = {
  __typename?: 'entities_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "entities" */
export type Entities_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "entities" */
export enum Entities_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IdNumber = 'id_number',
  /** column name */
  LetterAddress = 'letter_address',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  Phone = 'phone'
}

/** aggregate var_pop on columns */
export type Entities_Var_Pop_Fields = {
  __typename?: 'entities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "entities" */
export type Entities_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Entities_Var_Samp_Fields = {
  __typename?: 'entities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "entities" */
export type Entities_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Entities_Variance_Fields = {
  __typename?: 'entities_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "entities" */
export type Entities_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "insurance_contracts" */
export type Insurance_Contracts = {
  __typename?: 'insurance_contracts';
  comment?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  link_to_s3?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  /** An object relationship */
  property: Properties;
  property_id: Scalars['Int'];
  start_date?: Maybe<Scalars['date']>;
  who_pay: Scalars['Int'];
};

/** aggregated selection of "insurance_contracts" */
export type Insurance_Contracts_Aggregate = {
  __typename?: 'insurance_contracts_aggregate';
  aggregate?: Maybe<Insurance_Contracts_Aggregate_Fields>;
  nodes: Array<Insurance_Contracts>;
};

/** aggregate fields of "insurance_contracts" */
export type Insurance_Contracts_Aggregate_Fields = {
  __typename?: 'insurance_contracts_aggregate_fields';
  avg?: Maybe<Insurance_Contracts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Insurance_Contracts_Max_Fields>;
  min?: Maybe<Insurance_Contracts_Min_Fields>;
  stddev?: Maybe<Insurance_Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Insurance_Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Insurance_Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Insurance_Contracts_Sum_Fields>;
  var_pop?: Maybe<Insurance_Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Insurance_Contracts_Var_Samp_Fields>;
  variance?: Maybe<Insurance_Contracts_Variance_Fields>;
};


/** aggregate fields of "insurance_contracts" */
export type Insurance_Contracts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "insurance_contracts" */
export type Insurance_Contracts_Aggregate_Order_By = {
  avg?: Maybe<Insurance_Contracts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Insurance_Contracts_Max_Order_By>;
  min?: Maybe<Insurance_Contracts_Min_Order_By>;
  stddev?: Maybe<Insurance_Contracts_Stddev_Order_By>;
  stddev_pop?: Maybe<Insurance_Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Insurance_Contracts_Stddev_Samp_Order_By>;
  sum?: Maybe<Insurance_Contracts_Sum_Order_By>;
  var_pop?: Maybe<Insurance_Contracts_Var_Pop_Order_By>;
  var_samp?: Maybe<Insurance_Contracts_Var_Samp_Order_By>;
  variance?: Maybe<Insurance_Contracts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "insurance_contracts" */
export type Insurance_Contracts_Arr_Rel_Insert_Input = {
  data: Array<Insurance_Contracts_Insert_Input>;
  on_conflict?: Maybe<Insurance_Contracts_On_Conflict>;
};

/** aggregate avg on columns */
export type Insurance_Contracts_Avg_Fields = {
  __typename?: 'insurance_contracts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "insurance_contracts". All fields are combined with a logical 'AND'. */
export type Insurance_Contracts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Insurance_Contracts_Bool_Exp>>>;
  _not?: Maybe<Insurance_Contracts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Insurance_Contracts_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  link_to_s3?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  property?: Maybe<Properties_Bool_Exp>;
  property_id?: Maybe<Int_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  who_pay?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "insurance_contracts" */
export enum Insurance_Contracts_Constraint {
  /** unique or primary key constraint */
  InsuranceContractsPkey = 'insurance_contracts_pkey'
}

/** input type for incrementing integer column in table "insurance_contracts" */
export type Insurance_Contracts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  property_id?: Maybe<Scalars['Int']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "insurance_contracts" */
export type Insurance_Contracts_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  property?: Maybe<Properties_Obj_Rel_Insert_Input>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Insurance_Contracts_Max_Fields = {
  __typename?: 'insurance_contracts_max_fields';
  comment?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Max_Order_By = {
  comment?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Insurance_Contracts_Min_Fields = {
  __typename?: 'insurance_contracts_min_fields';
  comment?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Min_Order_By = {
  comment?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** response of any mutation on the table "insurance_contracts" */
export type Insurance_Contracts_Mutation_Response = {
  __typename?: 'insurance_contracts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Insurance_Contracts>;
};

/** input type for inserting object relation for remote table "insurance_contracts" */
export type Insurance_Contracts_Obj_Rel_Insert_Input = {
  data: Insurance_Contracts_Insert_Input;
  on_conflict?: Maybe<Insurance_Contracts_On_Conflict>;
};

/** on conflict condition type for table "insurance_contracts" */
export type Insurance_Contracts_On_Conflict = {
  constraint: Insurance_Contracts_Constraint;
  update_columns: Array<Insurance_Contracts_Update_Column>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};

/** ordering options when selecting data from "insurance_contracts" */
export type Insurance_Contracts_Order_By = {
  comment?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link_to_s3?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property?: Maybe<Properties_Order_By>;
  property_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** primary key columns input for table: "insurance_contracts" */
export type Insurance_Contracts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "insurance_contracts" */
export enum Insurance_Contracts_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  Price = 'price',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  WhoPay = 'who_pay'
}

/** input type for updating data in table "insurance_contracts" */
export type Insurance_Contracts_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  link_to_s3?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  property_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['date']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Insurance_Contracts_Stddev_Fields = {
  __typename?: 'insurance_contracts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Insurance_Contracts_Stddev_Pop_Fields = {
  __typename?: 'insurance_contracts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Insurance_Contracts_Stddev_Samp_Fields = {
  __typename?: 'insurance_contracts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Insurance_Contracts_Sum_Fields = {
  __typename?: 'insurance_contracts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  property_id?: Maybe<Scalars['Int']>;
  who_pay?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** update columns of table "insurance_contracts" */
export enum Insurance_Contracts_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  LinkToS3 = 'link_to_s3',
  /** column name */
  Price = 'price',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  WhoPay = 'who_pay'
}

/** aggregate var_pop on columns */
export type Insurance_Contracts_Var_Pop_Fields = {
  __typename?: 'insurance_contracts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Insurance_Contracts_Var_Samp_Fields = {
  __typename?: 'insurance_contracts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Insurance_Contracts_Variance_Fields = {
  __typename?: 'insurance_contracts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  property_id?: Maybe<Scalars['Float']>;
  who_pay?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "insurance_contracts" */
export type Insurance_Contracts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  property_id?: Maybe<Order_By>;
  who_pay?: Maybe<Order_By>;
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "contracts" */
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  /** delete single row from the table: "contracts" */
  delete_contracts_by_pk?: Maybe<Contracts>;
  /** delete data from the table: "contracts_renters_relation" */
  delete_contracts_renters_relation?: Maybe<Contracts_Renters_Relation_Mutation_Response>;
  /** delete single row from the table: "contracts_renters_relation" */
  delete_contracts_renters_relation_by_pk?: Maybe<Contracts_Renters_Relation>;
  /** delete data from the table: "entities" */
  delete_entities?: Maybe<Entities_Mutation_Response>;
  /** delete single row from the table: "entities" */
  delete_entities_by_pk?: Maybe<Entities>;
  /** delete data from the table: "insurance_contracts" */
  delete_insurance_contracts?: Maybe<Insurance_Contracts_Mutation_Response>;
  /** delete single row from the table: "insurance_contracts" */
  delete_insurance_contracts_by_pk?: Maybe<Insurance_Contracts>;
  /** delete data from the table: "pay_methods" */
  delete_pay_methods?: Maybe<Pay_Methods_Mutation_Response>;
  /** delete single row from the table: "pay_methods" */
  delete_pay_methods_by_pk?: Maybe<Pay_Methods>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>;
  /** delete data from the table: "project_managers" */
  delete_project_managers?: Maybe<Project_Managers_Mutation_Response>;
  /** delete single row from the table: "project_managers" */
  delete_project_managers_by_pk?: Maybe<Project_Managers>;
  /** delete data from the table: "properties" */
  delete_properties?: Maybe<Properties_Mutation_Response>;
  /** delete single row from the table: "properties" */
  delete_properties_by_pk?: Maybe<Properties>;
  /** delete data from the table: "ticket_types" */
  delete_ticket_types?: Maybe<Ticket_Types_Mutation_Response>;
  /** delete single row from the table: "ticket_types" */
  delete_ticket_types_by_pk?: Maybe<Ticket_Types>;
  /** delete data from the table: "tickets" */
  delete_tickets?: Maybe<Tickets_Mutation_Response>;
  /** delete single row from the table: "tickets" */
  delete_tickets_by_pk?: Maybe<Tickets>;
  /** insert data into the table: "contracts" */
  insert_contracts?: Maybe<Contracts_Mutation_Response>;
  /** insert a single row into the table: "contracts" */
  insert_contracts_one?: Maybe<Contracts>;
  /** insert data into the table: "contracts_renters_relation" */
  insert_contracts_renters_relation?: Maybe<Contracts_Renters_Relation_Mutation_Response>;
  /** insert a single row into the table: "contracts_renters_relation" */
  insert_contracts_renters_relation_one?: Maybe<Contracts_Renters_Relation>;
  /** insert data into the table: "entities" */
  insert_entities?: Maybe<Entities_Mutation_Response>;
  /** insert a single row into the table: "entities" */
  insert_entities_one?: Maybe<Entities>;
  /** insert data into the table: "insurance_contracts" */
  insert_insurance_contracts?: Maybe<Insurance_Contracts_Mutation_Response>;
  /** insert a single row into the table: "insurance_contracts" */
  insert_insurance_contracts_one?: Maybe<Insurance_Contracts>;
  /** insert data into the table: "pay_methods" */
  insert_pay_methods?: Maybe<Pay_Methods_Mutation_Response>;
  /** insert a single row into the table: "pay_methods" */
  insert_pay_methods_one?: Maybe<Pay_Methods>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>;
  /** insert data into the table: "project_managers" */
  insert_project_managers?: Maybe<Project_Managers_Mutation_Response>;
  /** insert a single row into the table: "project_managers" */
  insert_project_managers_one?: Maybe<Project_Managers>;
  /** insert data into the table: "properties" */
  insert_properties?: Maybe<Properties_Mutation_Response>;
  /** insert a single row into the table: "properties" */
  insert_properties_one?: Maybe<Properties>;
  /** insert data into the table: "ticket_types" */
  insert_ticket_types?: Maybe<Ticket_Types_Mutation_Response>;
  /** insert a single row into the table: "ticket_types" */
  insert_ticket_types_one?: Maybe<Ticket_Types>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** update data of the table: "contracts" */
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  /** update single row of the table: "contracts" */
  update_contracts_by_pk?: Maybe<Contracts>;
  /** update data of the table: "contracts_renters_relation" */
  update_contracts_renters_relation?: Maybe<Contracts_Renters_Relation_Mutation_Response>;
  /** update single row of the table: "contracts_renters_relation" */
  update_contracts_renters_relation_by_pk?: Maybe<Contracts_Renters_Relation>;
  /** update data of the table: "entities" */
  update_entities?: Maybe<Entities_Mutation_Response>;
  /** update single row of the table: "entities" */
  update_entities_by_pk?: Maybe<Entities>;
  /** update data of the table: "insurance_contracts" */
  update_insurance_contracts?: Maybe<Insurance_Contracts_Mutation_Response>;
  /** update single row of the table: "insurance_contracts" */
  update_insurance_contracts_by_pk?: Maybe<Insurance_Contracts>;
  /** update data of the table: "pay_methods" */
  update_pay_methods?: Maybe<Pay_Methods_Mutation_Response>;
  /** update single row of the table: "pay_methods" */
  update_pay_methods_by_pk?: Maybe<Pay_Methods>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>;
  /** update data of the table: "project_managers" */
  update_project_managers?: Maybe<Project_Managers_Mutation_Response>;
  /** update single row of the table: "project_managers" */
  update_project_managers_by_pk?: Maybe<Project_Managers>;
  /** update data of the table: "properties" */
  update_properties?: Maybe<Properties_Mutation_Response>;
  /** update single row of the table: "properties" */
  update_properties_by_pk?: Maybe<Properties>;
  /** update data of the table: "ticket_types" */
  update_ticket_types?: Maybe<Ticket_Types_Mutation_Response>;
  /** update single row of the table: "ticket_types" */
  update_ticket_types_by_pk?: Maybe<Ticket_Types>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
};


/** mutation root */
export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Contracts_Renters_RelationArgs = {
  where: Contracts_Renters_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contracts_Renters_Relation_By_PkArgs = {
  contract_id: Scalars['Int'];
  renter_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EntitiesArgs = {
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entities_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Insurance_ContractsArgs = {
  where: Insurance_Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Insurance_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Pay_MethodsArgs = {
  where: Pay_Methods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pay_Methods_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Project_ManagersArgs = {
  where: Project_Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Managers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ticket_TypesArgs = {
  where: Ticket_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ticket_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: Maybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_Renters_RelationArgs = {
  objects: Array<Contracts_Renters_Relation_Insert_Input>;
  on_conflict?: Maybe<Contracts_Renters_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_Renters_Relation_OneArgs = {
  object: Contracts_Renters_Relation_Insert_Input;
  on_conflict?: Maybe<Contracts_Renters_Relation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EntitiesArgs = {
  objects: Array<Entities_Insert_Input>;
  on_conflict?: Maybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entities_OneArgs = {
  object: Entities_Insert_Input;
  on_conflict?: Maybe<Entities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Insurance_ContractsArgs = {
  objects: Array<Insurance_Contracts_Insert_Input>;
  on_conflict?: Maybe<Insurance_Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Insurance_Contracts_OneArgs = {
  object: Insurance_Contracts_Insert_Input;
  on_conflict?: Maybe<Insurance_Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pay_MethodsArgs = {
  objects: Array<Pay_Methods_Insert_Input>;
  on_conflict?: Maybe<Pay_Methods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pay_Methods_OneArgs = {
  object: Pay_Methods_Insert_Input;
  on_conflict?: Maybe<Pay_Methods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: Maybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input;
  on_conflict?: Maybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_ManagersArgs = {
  objects: Array<Project_Managers_Insert_Input>;
  on_conflict?: Maybe<Project_Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Managers_OneArgs = {
  object: Project_Managers_Insert_Input;
  on_conflict?: Maybe<Project_Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PropertiesArgs = {
  objects: Array<Properties_Insert_Input>;
  on_conflict?: Maybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Properties_OneArgs = {
  object: Properties_Insert_Input;
  on_conflict?: Maybe<Properties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_TypesArgs = {
  objects: Array<Ticket_Types_Insert_Input>;
  on_conflict?: Maybe<Ticket_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ticket_Types_OneArgs = {
  object: Ticket_Types_Insert_Input;
  on_conflict?: Maybe<Ticket_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketsArgs = {
  objects: Array<Tickets_Insert_Input>;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tickets_OneArgs = {
  object: Tickets_Insert_Input;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ContractsArgs = {
  _inc?: Maybe<Contracts_Inc_Input>;
  _set?: Maybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _inc?: Maybe<Contracts_Inc_Input>;
  _set?: Maybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_Renters_RelationArgs = {
  _inc?: Maybe<Contracts_Renters_Relation_Inc_Input>;
  _set?: Maybe<Contracts_Renters_Relation_Set_Input>;
  where: Contracts_Renters_Relation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_Renters_Relation_By_PkArgs = {
  _inc?: Maybe<Contracts_Renters_Relation_Inc_Input>;
  _set?: Maybe<Contracts_Renters_Relation_Set_Input>;
  pk_columns: Contracts_Renters_Relation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_EntitiesArgs = {
  _inc?: Maybe<Entities_Inc_Input>;
  _set?: Maybe<Entities_Set_Input>;
  where: Entities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entities_By_PkArgs = {
  _inc?: Maybe<Entities_Inc_Input>;
  _set?: Maybe<Entities_Set_Input>;
  pk_columns: Entities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Insurance_ContractsArgs = {
  _inc?: Maybe<Insurance_Contracts_Inc_Input>;
  _set?: Maybe<Insurance_Contracts_Set_Input>;
  where: Insurance_Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Insurance_Contracts_By_PkArgs = {
  _inc?: Maybe<Insurance_Contracts_Inc_Input>;
  _set?: Maybe<Insurance_Contracts_Set_Input>;
  pk_columns: Insurance_Contracts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pay_MethodsArgs = {
  _inc?: Maybe<Pay_Methods_Inc_Input>;
  _set?: Maybe<Pay_Methods_Set_Input>;
  where: Pay_Methods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pay_Methods_By_PkArgs = {
  _inc?: Maybe<Pay_Methods_Inc_Input>;
  _set?: Maybe<Pay_Methods_Set_Input>;
  pk_columns: Pay_Methods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: Maybe<Payments_Inc_Input>;
  _set?: Maybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: Maybe<Payments_Inc_Input>;
  _set?: Maybe<Payments_Set_Input>;
  pk_columns: Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_ManagersArgs = {
  _inc?: Maybe<Project_Managers_Inc_Input>;
  _set?: Maybe<Project_Managers_Set_Input>;
  where: Project_Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Managers_By_PkArgs = {
  _inc?: Maybe<Project_Managers_Inc_Input>;
  _set?: Maybe<Project_Managers_Set_Input>;
  pk_columns: Project_Managers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PropertiesArgs = {
  _inc?: Maybe<Properties_Inc_Input>;
  _set?: Maybe<Properties_Set_Input>;
  where: Properties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _inc?: Maybe<Properties_Inc_Input>;
  _set?: Maybe<Properties_Set_Input>;
  pk_columns: Properties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_TypesArgs = {
  _inc?: Maybe<Ticket_Types_Inc_Input>;
  _set?: Maybe<Ticket_Types_Set_Input>;
  where: Ticket_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ticket_Types_By_PkArgs = {
  _inc?: Maybe<Ticket_Types_Inc_Input>;
  _set?: Maybe<Ticket_Types_Set_Input>;
  pk_columns: Ticket_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TicketsArgs = {
  _inc?: Maybe<Tickets_Inc_Input>;
  _set?: Maybe<Tickets_Set_Input>;
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_By_PkArgs = {
  _inc?: Maybe<Tickets_Inc_Input>;
  _set?: Maybe<Tickets_Set_Input>;
  pk_columns: Tickets_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pay_methods" */
export type Pay_Methods = {
  __typename?: 'pay_methods';
  id: Scalars['Int'];
  method_type: Scalars['String'];
};

/** aggregated selection of "pay_methods" */
export type Pay_Methods_Aggregate = {
  __typename?: 'pay_methods_aggregate';
  aggregate?: Maybe<Pay_Methods_Aggregate_Fields>;
  nodes: Array<Pay_Methods>;
};

/** aggregate fields of "pay_methods" */
export type Pay_Methods_Aggregate_Fields = {
  __typename?: 'pay_methods_aggregate_fields';
  avg?: Maybe<Pay_Methods_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Pay_Methods_Max_Fields>;
  min?: Maybe<Pay_Methods_Min_Fields>;
  stddev?: Maybe<Pay_Methods_Stddev_Fields>;
  stddev_pop?: Maybe<Pay_Methods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pay_Methods_Stddev_Samp_Fields>;
  sum?: Maybe<Pay_Methods_Sum_Fields>;
  var_pop?: Maybe<Pay_Methods_Var_Pop_Fields>;
  var_samp?: Maybe<Pay_Methods_Var_Samp_Fields>;
  variance?: Maybe<Pay_Methods_Variance_Fields>;
};


/** aggregate fields of "pay_methods" */
export type Pay_Methods_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pay_Methods_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pay_methods" */
export type Pay_Methods_Aggregate_Order_By = {
  avg?: Maybe<Pay_Methods_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Pay_Methods_Max_Order_By>;
  min?: Maybe<Pay_Methods_Min_Order_By>;
  stddev?: Maybe<Pay_Methods_Stddev_Order_By>;
  stddev_pop?: Maybe<Pay_Methods_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Pay_Methods_Stddev_Samp_Order_By>;
  sum?: Maybe<Pay_Methods_Sum_Order_By>;
  var_pop?: Maybe<Pay_Methods_Var_Pop_Order_By>;
  var_samp?: Maybe<Pay_Methods_Var_Samp_Order_By>;
  variance?: Maybe<Pay_Methods_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "pay_methods" */
export type Pay_Methods_Arr_Rel_Insert_Input = {
  data: Array<Pay_Methods_Insert_Input>;
  on_conflict?: Maybe<Pay_Methods_On_Conflict>;
};

/** aggregate avg on columns */
export type Pay_Methods_Avg_Fields = {
  __typename?: 'pay_methods_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pay_methods" */
export type Pay_Methods_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pay_methods". All fields are combined with a logical 'AND'. */
export type Pay_Methods_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Pay_Methods_Bool_Exp>>>;
  _not?: Maybe<Pay_Methods_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Pay_Methods_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  method_type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pay_methods" */
export enum Pay_Methods_Constraint {
  /** unique or primary key constraint */
  PayMethodsPkey = 'pay_methods_pkey'
}

/** input type for incrementing integer column in table "pay_methods" */
export type Pay_Methods_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "pay_methods" */
export type Pay_Methods_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  method_type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Pay_Methods_Max_Fields = {
  __typename?: 'pay_methods_max_fields';
  id?: Maybe<Scalars['Int']>;
  method_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "pay_methods" */
export type Pay_Methods_Max_Order_By = {
  id?: Maybe<Order_By>;
  method_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Pay_Methods_Min_Fields = {
  __typename?: 'pay_methods_min_fields';
  id?: Maybe<Scalars['Int']>;
  method_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "pay_methods" */
export type Pay_Methods_Min_Order_By = {
  id?: Maybe<Order_By>;
  method_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "pay_methods" */
export type Pay_Methods_Mutation_Response = {
  __typename?: 'pay_methods_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Pay_Methods>;
};

/** input type for inserting object relation for remote table "pay_methods" */
export type Pay_Methods_Obj_Rel_Insert_Input = {
  data: Pay_Methods_Insert_Input;
  on_conflict?: Maybe<Pay_Methods_On_Conflict>;
};

/** on conflict condition type for table "pay_methods" */
export type Pay_Methods_On_Conflict = {
  constraint: Pay_Methods_Constraint;
  update_columns: Array<Pay_Methods_Update_Column>;
  where?: Maybe<Pay_Methods_Bool_Exp>;
};

/** ordering options when selecting data from "pay_methods" */
export type Pay_Methods_Order_By = {
  id?: Maybe<Order_By>;
  method_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "pay_methods" */
export type Pay_Methods_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "pay_methods" */
export enum Pay_Methods_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MethodType = 'method_type'
}

/** input type for updating data in table "pay_methods" */
export type Pay_Methods_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  method_type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Pay_Methods_Stddev_Fields = {
  __typename?: 'pay_methods_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pay_methods" */
export type Pay_Methods_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pay_Methods_Stddev_Pop_Fields = {
  __typename?: 'pay_methods_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pay_methods" */
export type Pay_Methods_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pay_Methods_Stddev_Samp_Fields = {
  __typename?: 'pay_methods_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pay_methods" */
export type Pay_Methods_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Pay_Methods_Sum_Fields = {
  __typename?: 'pay_methods_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "pay_methods" */
export type Pay_Methods_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "pay_methods" */
export enum Pay_Methods_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MethodType = 'method_type'
}

/** aggregate var_pop on columns */
export type Pay_Methods_Var_Pop_Fields = {
  __typename?: 'pay_methods_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pay_methods" */
export type Pay_Methods_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pay_Methods_Var_Samp_Fields = {
  __typename?: 'pay_methods_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pay_methods" */
export type Pay_Methods_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Pay_Methods_Variance_Fields = {
  __typename?: 'pay_methods_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pay_methods" */
export type Pay_Methods_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments';
  amount: Scalars['float8'];
  /** An object relationship */
  contract: Contracts;
  contract_id: Scalars['Int'];
  date: Scalars['date'];
  id: Scalars['Int'];
  /** An array relationship */
  tickets: Array<Tickets>;
  /** An aggregated array relationship */
  tickets_aggregate: Tickets_Aggregate;
};


/** columns and relationships of "payments" */
export type PaymentsTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** columns and relationships of "payments" */
export type PaymentsTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate';
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields';
  avg?: Maybe<Payments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Payments_Max_Fields>;
  min?: Maybe<Payments_Min_Fields>;
  stddev?: Maybe<Payments_Stddev_Fields>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>;
  sum?: Maybe<Payments_Sum_Fields>;
  var_pop?: Maybe<Payments_Var_Pop_Fields>;
  var_samp?: Maybe<Payments_Var_Samp_Fields>;
  variance?: Maybe<Payments_Variance_Fields>;
};


/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payments" */
export type Payments_Aggregate_Order_By = {
  avg?: Maybe<Payments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payments_Max_Order_By>;
  min?: Maybe<Payments_Min_Order_By>;
  stddev?: Maybe<Payments_Stddev_Order_By>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Order_By>;
  sum?: Maybe<Payments_Sum_Order_By>;
  var_pop?: Maybe<Payments_Var_Pop_Order_By>;
  var_samp?: Maybe<Payments_Var_Samp_Order_By>;
  variance?: Maybe<Payments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payments" */
export type Payments_Arr_Rel_Insert_Input = {
  data: Array<Payments_Insert_Input>;
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "payments" */
export type Payments_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payments_Bool_Exp>>>;
  _not?: Maybe<Payments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payments_Bool_Exp>>>;
  amount?: Maybe<Float8_Comparison_Exp>;
  contract?: Maybe<Contracts_Bool_Exp>;
  contract_id?: Maybe<Int_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tickets?: Maybe<Tickets_Bool_Exp>;
};

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint */
  PaymentsPkey = 'payments_pkey'
}

/** input type for incrementing integer column in table "payments" */
export type Payments_Inc_Input = {
  amount?: Maybe<Scalars['float8']>;
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: Maybe<Scalars['float8']>;
  contract?: Maybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  tickets?: Maybe<Tickets_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields';
  amount?: Maybe<Scalars['float8']>;
  contract_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "payments" */
export type Payments_Max_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields';
  amount?: Maybe<Scalars['float8']>;
  contract_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "payments" */
export type Payments_Min_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Payments>;
};

/** input type for inserting object relation for remote table "payments" */
export type Payments_Obj_Rel_Insert_Input = {
  data: Payments_Insert_Input;
  on_conflict?: Maybe<Payments_On_Conflict>;
};

/** on conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns: Array<Payments_Update_Column>;
  where?: Maybe<Payments_Bool_Exp>;
};

/** ordering options when selecting data from "payments" */
export type Payments_Order_By = {
  amount?: Maybe<Order_By>;
  contract?: Maybe<Contracts_Order_By>;
  contract_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tickets_aggregate?: Maybe<Tickets_Aggregate_Order_By>;
};

/** primary key columns input for table: "payments" */
export type Payments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: Maybe<Scalars['float8']>;
  contract_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "payments" */
export type Payments_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "payments" */
export type Payments_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "payments" */
export type Payments_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "payments" */
export type Payments_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "payments" */
export type Payments_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "payments" */
export type Payments_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "payments" */
export type Payments_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "project_managers" */
export type Project_Managers = {
  __typename?: 'project_managers';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  properties: Array<Properties>;
  /** An aggregated array relationship */
  properties_aggregate: Properties_Aggregate;
  /** An array relationship */
  tickets: Array<Tickets>;
  /** An aggregated array relationship */
  tickets_aggregate: Tickets_Aggregate;
};


/** columns and relationships of "project_managers" */
export type Project_ManagersPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** columns and relationships of "project_managers" */
export type Project_ManagersProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** columns and relationships of "project_managers" */
export type Project_ManagersTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** columns and relationships of "project_managers" */
export type Project_ManagersTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** aggregated selection of "project_managers" */
export type Project_Managers_Aggregate = {
  __typename?: 'project_managers_aggregate';
  aggregate?: Maybe<Project_Managers_Aggregate_Fields>;
  nodes: Array<Project_Managers>;
};

/** aggregate fields of "project_managers" */
export type Project_Managers_Aggregate_Fields = {
  __typename?: 'project_managers_aggregate_fields';
  avg?: Maybe<Project_Managers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Project_Managers_Max_Fields>;
  min?: Maybe<Project_Managers_Min_Fields>;
  stddev?: Maybe<Project_Managers_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Managers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Managers_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Managers_Sum_Fields>;
  var_pop?: Maybe<Project_Managers_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Managers_Var_Samp_Fields>;
  variance?: Maybe<Project_Managers_Variance_Fields>;
};


/** aggregate fields of "project_managers" */
export type Project_Managers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Managers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_managers" */
export type Project_Managers_Aggregate_Order_By = {
  avg?: Maybe<Project_Managers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Managers_Max_Order_By>;
  min?: Maybe<Project_Managers_Min_Order_By>;
  stddev?: Maybe<Project_Managers_Stddev_Order_By>;
  stddev_pop?: Maybe<Project_Managers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Project_Managers_Stddev_Samp_Order_By>;
  sum?: Maybe<Project_Managers_Sum_Order_By>;
  var_pop?: Maybe<Project_Managers_Var_Pop_Order_By>;
  var_samp?: Maybe<Project_Managers_Var_Samp_Order_By>;
  variance?: Maybe<Project_Managers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_managers" */
export type Project_Managers_Arr_Rel_Insert_Input = {
  data: Array<Project_Managers_Insert_Input>;
  on_conflict?: Maybe<Project_Managers_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Managers_Avg_Fields = {
  __typename?: 'project_managers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "project_managers" */
export type Project_Managers_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_managers". All fields are combined with a logical 'AND'. */
export type Project_Managers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_Managers_Bool_Exp>>>;
  _not?: Maybe<Project_Managers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_Managers_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  properties?: Maybe<Properties_Bool_Exp>;
  tickets?: Maybe<Tickets_Bool_Exp>;
};

/** unique or primary key constraints on table "project_managers" */
export enum Project_Managers_Constraint {
  /** unique or primary key constraint */
  ProjectManagersPkey = 'project_managers_pkey'
}

/** input type for incrementing integer column in table "project_managers" */
export type Project_Managers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "project_managers" */
export type Project_Managers_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Properties_Arr_Rel_Insert_Input>;
  tickets?: Maybe<Tickets_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Project_Managers_Max_Fields = {
  __typename?: 'project_managers_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "project_managers" */
export type Project_Managers_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Managers_Min_Fields = {
  __typename?: 'project_managers_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "project_managers" */
export type Project_Managers_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_managers" */
export type Project_Managers_Mutation_Response = {
  __typename?: 'project_managers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Project_Managers>;
};

/** input type for inserting object relation for remote table "project_managers" */
export type Project_Managers_Obj_Rel_Insert_Input = {
  data: Project_Managers_Insert_Input;
  on_conflict?: Maybe<Project_Managers_On_Conflict>;
};

/** on conflict condition type for table "project_managers" */
export type Project_Managers_On_Conflict = {
  constraint: Project_Managers_Constraint;
  update_columns: Array<Project_Managers_Update_Column>;
  where?: Maybe<Project_Managers_Bool_Exp>;
};

/** ordering options when selecting data from "project_managers" */
export type Project_Managers_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  properties_aggregate?: Maybe<Properties_Aggregate_Order_By>;
  tickets_aggregate?: Maybe<Tickets_Aggregate_Order_By>;
};

/** primary key columns input for table: "project_managers" */
export type Project_Managers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "project_managers" */
export enum Project_Managers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "project_managers" */
export type Project_Managers_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Project_Managers_Stddev_Fields = {
  __typename?: 'project_managers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "project_managers" */
export type Project_Managers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Managers_Stddev_Pop_Fields = {
  __typename?: 'project_managers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "project_managers" */
export type Project_Managers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Managers_Stddev_Samp_Fields = {
  __typename?: 'project_managers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "project_managers" */
export type Project_Managers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Project_Managers_Sum_Fields = {
  __typename?: 'project_managers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "project_managers" */
export type Project_Managers_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "project_managers" */
export enum Project_Managers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Project_Managers_Var_Pop_Fields = {
  __typename?: 'project_managers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "project_managers" */
export type Project_Managers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Managers_Var_Samp_Fields = {
  __typename?: 'project_managers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "project_managers" */
export type Project_Managers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Managers_Variance_Fields = {
  __typename?: 'project_managers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "project_managers" */
export type Project_Managers_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: 'properties';
  address?: Maybe<Scalars['String']>;
  address_part?: Maybe<Scalars['String']>;
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregated array relationship */
  contracts_aggregate: Contracts_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  insurance_contracts: Array<Insurance_Contracts>;
  /** An aggregated array relationship */
  insurance_contracts_aggregate: Insurance_Contracts_Aggregate;
  /** An object relationship */
  projectManagerByProjectManager: Project_Managers;
  project_manager: Scalars['Int'];
};


/** columns and relationships of "properties" */
export type PropertiesContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "properties" */
export type PropertiesContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "properties" */
export type PropertiesInsurance_ContractsArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};


/** columns and relationships of "properties" */
export type PropertiesInsurance_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: 'properties_aggregate';
  aggregate?: Maybe<Properties_Aggregate_Fields>;
  nodes: Array<Properties>;
};

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: 'properties_aggregate_fields';
  avg?: Maybe<Properties_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Properties_Max_Fields>;
  min?: Maybe<Properties_Min_Fields>;
  stddev?: Maybe<Properties_Stddev_Fields>;
  stddev_pop?: Maybe<Properties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Properties_Stddev_Samp_Fields>;
  sum?: Maybe<Properties_Sum_Fields>;
  var_pop?: Maybe<Properties_Var_Pop_Fields>;
  var_samp?: Maybe<Properties_Var_Samp_Fields>;
  variance?: Maybe<Properties_Variance_Fields>;
};


/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Properties_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "properties" */
export type Properties_Aggregate_Order_By = {
  avg?: Maybe<Properties_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Properties_Max_Order_By>;
  min?: Maybe<Properties_Min_Order_By>;
  stddev?: Maybe<Properties_Stddev_Order_By>;
  stddev_pop?: Maybe<Properties_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Properties_Stddev_Samp_Order_By>;
  sum?: Maybe<Properties_Sum_Order_By>;
  var_pop?: Maybe<Properties_Var_Pop_Order_By>;
  var_samp?: Maybe<Properties_Var_Samp_Order_By>;
  variance?: Maybe<Properties_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "properties" */
export type Properties_Arr_Rel_Insert_Input = {
  data: Array<Properties_Insert_Input>;
  on_conflict?: Maybe<Properties_On_Conflict>;
};

/** aggregate avg on columns */
export type Properties_Avg_Fields = {
  __typename?: 'properties_avg_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "properties" */
export type Properties_Avg_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Properties_Bool_Exp>>>;
  _not?: Maybe<Properties_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Properties_Bool_Exp>>>;
  address?: Maybe<String_Comparison_Exp>;
  address_part?: Maybe<String_Comparison_Exp>;
  arnona_monthly_amount?: Maybe<Money_Comparison_Exp>;
  contracts?: Maybe<Contracts_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  insurance_contracts?: Maybe<Insurance_Contracts_Bool_Exp>;
  projectManagerByProjectManager?: Maybe<Project_Managers_Bool_Exp>;
  project_manager?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint */
  PropertiesPkey = 'properties_pkey'
}

/** input type for incrementing integer column in table "properties" */
export type Properties_Inc_Input = {
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  address?: Maybe<Scalars['String']>;
  address_part?: Maybe<Scalars['String']>;
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  contracts?: Maybe<Contracts_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  insurance_contracts?: Maybe<Insurance_Contracts_Arr_Rel_Insert_Input>;
  projectManagerByProjectManager?: Maybe<Project_Managers_Obj_Rel_Insert_Input>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: 'properties_max_fields';
  address?: Maybe<Scalars['String']>;
  address_part?: Maybe<Scalars['String']>;
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "properties" */
export type Properties_Max_Order_By = {
  address?: Maybe<Order_By>;
  address_part?: Maybe<Order_By>;
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: 'properties_min_fields';
  address?: Maybe<Scalars['String']>;
  address_part?: Maybe<Scalars['String']>;
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "properties" */
export type Properties_Min_Order_By = {
  address?: Maybe<Order_By>;
  address_part?: Maybe<Order_By>;
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: 'properties_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Properties>;
};

/** input type for inserting object relation for remote table "properties" */
export type Properties_Obj_Rel_Insert_Input = {
  data: Properties_Insert_Input;
  on_conflict?: Maybe<Properties_On_Conflict>;
};

/** on conflict condition type for table "properties" */
export type Properties_On_Conflict = {
  constraint: Properties_Constraint;
  update_columns: Array<Properties_Update_Column>;
  where?: Maybe<Properties_Bool_Exp>;
};

/** ordering options when selecting data from "properties" */
export type Properties_Order_By = {
  address?: Maybe<Order_By>;
  address_part?: Maybe<Order_By>;
  arnona_monthly_amount?: Maybe<Order_By>;
  contracts_aggregate?: Maybe<Contracts_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  insurance_contracts_aggregate?: Maybe<Insurance_Contracts_Aggregate_Order_By>;
  projectManagerByProjectManager?: Maybe<Project_Managers_Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** primary key columns input for table: "properties" */
export type Properties_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AddressPart = 'address_part',
  /** column name */
  ArnonaMonthlyAmount = 'arnona_monthly_amount',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectManager = 'project_manager'
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  address?: Maybe<Scalars['String']>;
  address_part?: Maybe<Scalars['String']>;
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Properties_Stddev_Fields = {
  __typename?: 'properties_stddev_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "properties" */
export type Properties_Stddev_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Properties_Stddev_Pop_Fields = {
  __typename?: 'properties_stddev_pop_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "properties" */
export type Properties_Stddev_Pop_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Properties_Stddev_Samp_Fields = {
  __typename?: 'properties_stddev_samp_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "properties" */
export type Properties_Stddev_Samp_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Properties_Sum_Fields = {
  __typename?: 'properties_sum_fields';
  arnona_monthly_amount?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "properties" */
export type Properties_Sum_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AddressPart = 'address_part',
  /** column name */
  ArnonaMonthlyAmount = 'arnona_monthly_amount',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectManager = 'project_manager'
}

/** aggregate var_pop on columns */
export type Properties_Var_Pop_Fields = {
  __typename?: 'properties_var_pop_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "properties" */
export type Properties_Var_Pop_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Properties_Var_Samp_Fields = {
  __typename?: 'properties_var_samp_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "properties" */
export type Properties_Var_Samp_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Properties_Variance_Fields = {
  __typename?: 'properties_variance_fields';
  arnona_monthly_amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  project_manager?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "properties" */
export type Properties_Variance_Order_By = {
  arnona_monthly_amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_manager?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "contracts_renters_relation" */
  contracts_renters_relation: Array<Contracts_Renters_Relation>;
  /** fetch aggregated fields from the table: "contracts_renters_relation" */
  contracts_renters_relation_aggregate: Contracts_Renters_Relation_Aggregate;
  /** fetch data from the table: "contracts_renters_relation" using primary key columns */
  contracts_renters_relation_by_pk?: Maybe<Contracts_Renters_Relation>;
  /** fetch data from the table: "entities" */
  entities: Array<Entities>;
  /** fetch aggregated fields from the table: "entities" */
  entities_aggregate: Entities_Aggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "insurance_contracts" */
  insurance_contracts: Array<Insurance_Contracts>;
  /** fetch aggregated fields from the table: "insurance_contracts" */
  insurance_contracts_aggregate: Insurance_Contracts_Aggregate;
  /** fetch data from the table: "insurance_contracts" using primary key columns */
  insurance_contracts_by_pk?: Maybe<Insurance_Contracts>;
  /** fetch data from the table: "pay_methods" */
  pay_methods: Array<Pay_Methods>;
  /** fetch aggregated fields from the table: "pay_methods" */
  pay_methods_aggregate: Pay_Methods_Aggregate;
  /** fetch data from the table: "pay_methods" using primary key columns */
  pay_methods_by_pk?: Maybe<Pay_Methods>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "project_managers" */
  project_managers: Array<Project_Managers>;
  /** fetch aggregated fields from the table: "project_managers" */
  project_managers_aggregate: Project_Managers_Aggregate;
  /** fetch data from the table: "project_managers" using primary key columns */
  project_managers_by_pk?: Maybe<Project_Managers>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** fetch data from the table: "ticket_types" */
  ticket_types: Array<Ticket_Types>;
  /** fetch aggregated fields from the table: "ticket_types" */
  ticket_types_aggregate: Ticket_Types_Aggregate;
  /** fetch data from the table: "ticket_types" using primary key columns */
  ticket_types_by_pk?: Maybe<Ticket_Types>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
};


/** query root */
export type Query_RootContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** query root */
export type Query_RootContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** query root */
export type Query_RootContracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootContracts_Renters_RelationArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** query root */
export type Query_RootContracts_Renters_Relation_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** query root */
export type Query_RootContracts_Renters_Relation_By_PkArgs = {
  contract_id: Scalars['Int'];
  renter_id: Scalars['Int'];
};


/** query root */
export type Query_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** query root */
export type Query_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** query root */
export type Query_RootEntities_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInsurance_ContractsArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};


/** query root */
export type Query_RootInsurance_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};


/** query root */
export type Query_RootInsurance_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPay_MethodsArgs = {
  distinct_on?: Maybe<Array<Pay_Methods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pay_Methods_Order_By>>;
  where?: Maybe<Pay_Methods_Bool_Exp>;
};


/** query root */
export type Query_RootPay_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Pay_Methods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pay_Methods_Order_By>>;
  where?: Maybe<Pay_Methods_Bool_Exp>;
};


/** query root */
export type Query_RootPay_Methods_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** query root */
export type Query_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** query root */
export type Query_RootPayments_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProject_ManagersArgs = {
  distinct_on?: Maybe<Array<Project_Managers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Managers_Order_By>>;
  where?: Maybe<Project_Managers_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Managers_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Managers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Managers_Order_By>>;
  where?: Maybe<Project_Managers_Bool_Exp>;
};


/** query root */
export type Query_RootProject_Managers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** query root */
export type Query_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** query root */
export type Query_RootProperties_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTicket_TypesArgs = {
  distinct_on?: Maybe<Array<Ticket_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Types_Order_By>>;
  where?: Maybe<Ticket_Types_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Types_Order_By>>;
  where?: Maybe<Ticket_Types_Bool_Exp>;
};


/** query root */
export type Query_RootTicket_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** query root */
export type Query_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** query root */
export type Query_RootTickets_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "contracts" */
  contracts: Array<Contracts>;
  /** fetch aggregated fields from the table: "contracts" */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "contracts_renters_relation" */
  contracts_renters_relation: Array<Contracts_Renters_Relation>;
  /** fetch aggregated fields from the table: "contracts_renters_relation" */
  contracts_renters_relation_aggregate: Contracts_Renters_Relation_Aggregate;
  /** fetch data from the table: "contracts_renters_relation" using primary key columns */
  contracts_renters_relation_by_pk?: Maybe<Contracts_Renters_Relation>;
  /** fetch data from the table: "entities" */
  entities: Array<Entities>;
  /** fetch aggregated fields from the table: "entities" */
  entities_aggregate: Entities_Aggregate;
  /** fetch data from the table: "entities" using primary key columns */
  entities_by_pk?: Maybe<Entities>;
  /** fetch data from the table: "insurance_contracts" */
  insurance_contracts: Array<Insurance_Contracts>;
  /** fetch aggregated fields from the table: "insurance_contracts" */
  insurance_contracts_aggregate: Insurance_Contracts_Aggregate;
  /** fetch data from the table: "insurance_contracts" using primary key columns */
  insurance_contracts_by_pk?: Maybe<Insurance_Contracts>;
  /** fetch data from the table: "pay_methods" */
  pay_methods: Array<Pay_Methods>;
  /** fetch aggregated fields from the table: "pay_methods" */
  pay_methods_aggregate: Pay_Methods_Aggregate;
  /** fetch data from the table: "pay_methods" using primary key columns */
  pay_methods_by_pk?: Maybe<Pay_Methods>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "project_managers" */
  project_managers: Array<Project_Managers>;
  /** fetch aggregated fields from the table: "project_managers" */
  project_managers_aggregate: Project_Managers_Aggregate;
  /** fetch data from the table: "project_managers" using primary key columns */
  project_managers_by_pk?: Maybe<Project_Managers>;
  /** fetch data from the table: "properties" */
  properties: Array<Properties>;
  /** fetch aggregated fields from the table: "properties" */
  properties_aggregate: Properties_Aggregate;
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>;
  /** fetch data from the table: "ticket_types" */
  ticket_types: Array<Ticket_Types>;
  /** fetch aggregated fields from the table: "ticket_types" */
  ticket_types_aggregate: Ticket_Types_Aggregate;
  /** fetch data from the table: "ticket_types" using primary key columns */
  ticket_types_by_pk?: Maybe<Ticket_Types>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
};


/** subscription root */
export type Subscription_RootContractsArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Order_By>>;
  where?: Maybe<Contracts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootContracts_Renters_RelationArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContracts_Renters_Relation_AggregateArgs = {
  distinct_on?: Maybe<Array<Contracts_Renters_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Contracts_Renters_Relation_Order_By>>;
  where?: Maybe<Contracts_Renters_Relation_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootContracts_Renters_Relation_By_PkArgs = {
  contract_id: Scalars['Int'];
  renter_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootEntitiesArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntities_AggregateArgs = {
  distinct_on?: Maybe<Array<Entities_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Entities_Order_By>>;
  where?: Maybe<Entities_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootEntities_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInsurance_ContractsArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInsurance_Contracts_AggregateArgs = {
  distinct_on?: Maybe<Array<Insurance_Contracts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Insurance_Contracts_Order_By>>;
  where?: Maybe<Insurance_Contracts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInsurance_Contracts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPay_MethodsArgs = {
  distinct_on?: Maybe<Array<Pay_Methods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pay_Methods_Order_By>>;
  where?: Maybe<Pay_Methods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPay_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Pay_Methods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pay_Methods_Order_By>>;
  where?: Maybe<Pay_Methods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPay_Methods_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Payments_Order_By>>;
  where?: Maybe<Payments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProject_ManagersArgs = {
  distinct_on?: Maybe<Array<Project_Managers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Managers_Order_By>>;
  where?: Maybe<Project_Managers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Managers_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Managers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Managers_Order_By>>;
  where?: Maybe<Project_Managers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProject_Managers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Properties_Order_By>>;
  where?: Maybe<Properties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProperties_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTicket_TypesArgs = {
  distinct_on?: Maybe<Array<Ticket_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Types_Order_By>>;
  where?: Maybe<Ticket_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Ticket_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ticket_Types_Order_By>>;
  where?: Maybe<Ticket_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTicket_Types_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTickets_By_PkArgs = {
  id: Scalars['Int'];
};

/**
 * enum
 * 
 * 
 * columns and relationships of "ticket_types"
 */
export type Ticket_Types = {
  __typename?: 'ticket_types';
  id: Scalars['Int'];
  /** An array relationship */
  tickets: Array<Tickets>;
  /** An aggregated array relationship */
  tickets_aggregate: Tickets_Aggregate;
  type: Scalars['String'];
  what_to_do?: Maybe<Scalars['String']>;
};


/**
 * enum
 * 
 * 
 * columns and relationships of "ticket_types"
 */
export type Ticket_TypesTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


/**
 * enum
 * 
 * 
 * columns and relationships of "ticket_types"
 */
export type Ticket_TypesTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** aggregated selection of "ticket_types" */
export type Ticket_Types_Aggregate = {
  __typename?: 'ticket_types_aggregate';
  aggregate?: Maybe<Ticket_Types_Aggregate_Fields>;
  nodes: Array<Ticket_Types>;
};

/** aggregate fields of "ticket_types" */
export type Ticket_Types_Aggregate_Fields = {
  __typename?: 'ticket_types_aggregate_fields';
  avg?: Maybe<Ticket_Types_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ticket_Types_Max_Fields>;
  min?: Maybe<Ticket_Types_Min_Fields>;
  stddev?: Maybe<Ticket_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Ticket_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ticket_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Ticket_Types_Sum_Fields>;
  var_pop?: Maybe<Ticket_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Ticket_Types_Var_Samp_Fields>;
  variance?: Maybe<Ticket_Types_Variance_Fields>;
};


/** aggregate fields of "ticket_types" */
export type Ticket_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ticket_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ticket_types" */
export type Ticket_Types_Aggregate_Order_By = {
  avg?: Maybe<Ticket_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ticket_Types_Max_Order_By>;
  min?: Maybe<Ticket_Types_Min_Order_By>;
  stddev?: Maybe<Ticket_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Ticket_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ticket_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Ticket_Types_Sum_Order_By>;
  var_pop?: Maybe<Ticket_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Ticket_Types_Var_Samp_Order_By>;
  variance?: Maybe<Ticket_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ticket_types" */
export type Ticket_Types_Arr_Rel_Insert_Input = {
  data: Array<Ticket_Types_Insert_Input>;
  on_conflict?: Maybe<Ticket_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Ticket_Types_Avg_Fields = {
  __typename?: 'ticket_types_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ticket_types" */
export type Ticket_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ticket_types". All fields are combined with a logical 'AND'. */
export type Ticket_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ticket_Types_Bool_Exp>>>;
  _not?: Maybe<Ticket_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ticket_Types_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  tickets?: Maybe<Tickets_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  what_to_do?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ticket_types" */
export enum Ticket_Types_Constraint {
  /** unique or primary key constraint */
  TicketTypesPkey = 'ticket_types_pkey',
  /** unique or primary key constraint */
  TicketTypesTypeKey = 'ticket_types_type_key'
}

/** input type for incrementing integer column in table "ticket_types" */
export type Ticket_Types_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ticket_types" */
export type Ticket_Types_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  tickets?: Maybe<Tickets_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  what_to_do?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ticket_Types_Max_Fields = {
  __typename?: 'ticket_types_max_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  what_to_do?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ticket_types" */
export type Ticket_Types_Max_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  what_to_do?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ticket_Types_Min_Fields = {
  __typename?: 'ticket_types_min_fields';
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  what_to_do?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ticket_types" */
export type Ticket_Types_Min_Order_By = {
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  what_to_do?: Maybe<Order_By>;
};

/** response of any mutation on the table "ticket_types" */
export type Ticket_Types_Mutation_Response = {
  __typename?: 'ticket_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ticket_Types>;
};

/** input type for inserting object relation for remote table "ticket_types" */
export type Ticket_Types_Obj_Rel_Insert_Input = {
  data: Ticket_Types_Insert_Input;
  on_conflict?: Maybe<Ticket_Types_On_Conflict>;
};

/** on conflict condition type for table "ticket_types" */
export type Ticket_Types_On_Conflict = {
  constraint: Ticket_Types_Constraint;
  update_columns: Array<Ticket_Types_Update_Column>;
  where?: Maybe<Ticket_Types_Bool_Exp>;
};

/** ordering options when selecting data from "ticket_types" */
export type Ticket_Types_Order_By = {
  id?: Maybe<Order_By>;
  tickets_aggregate?: Maybe<Tickets_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  what_to_do?: Maybe<Order_By>;
};

/** primary key columns input for table: "ticket_types" */
export type Ticket_Types_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ticket_types" */
export enum Ticket_Types_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  WhatToDo = 'what_to_do'
}

/** input type for updating data in table "ticket_types" */
export type Ticket_Types_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  what_to_do?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ticket_Types_Stddev_Fields = {
  __typename?: 'ticket_types_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ticket_types" */
export type Ticket_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ticket_Types_Stddev_Pop_Fields = {
  __typename?: 'ticket_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ticket_types" */
export type Ticket_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ticket_Types_Stddev_Samp_Fields = {
  __typename?: 'ticket_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ticket_types" */
export type Ticket_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ticket_Types_Sum_Fields = {
  __typename?: 'ticket_types_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ticket_types" */
export type Ticket_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "ticket_types" */
export enum Ticket_Types_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  WhatToDo = 'what_to_do'
}

/** aggregate var_pop on columns */
export type Ticket_Types_Var_Pop_Fields = {
  __typename?: 'ticket_types_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ticket_types" */
export type Ticket_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ticket_Types_Var_Samp_Fields = {
  __typename?: 'ticket_types_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ticket_types" */
export type Ticket_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ticket_Types_Variance_Fields = {
  __typename?: 'ticket_types_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ticket_types" */
export type Ticket_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  /** An object relationship */
  contract?: Maybe<Contracts>;
  contract_id?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  opening_date: Scalars['date'];
  /** An object relationship */
  payment?: Maybe<Payments>;
  payment_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  project_manager: Project_Managers;
  project_manager_id: Scalars['Int'];
  /** An object relationship */
  ticket_type: Ticket_Types;
  tieck_type_id: Scalars['Int'];
};

/** aggregated selection of "tickets" */
export type Tickets_Aggregate = {
  __typename?: 'tickets_aggregate';
  aggregate?: Maybe<Tickets_Aggregate_Fields>;
  nodes: Array<Tickets>;
};

/** aggregate fields of "tickets" */
export type Tickets_Aggregate_Fields = {
  __typename?: 'tickets_aggregate_fields';
  avg?: Maybe<Tickets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tickets_Max_Fields>;
  min?: Maybe<Tickets_Min_Fields>;
  stddev?: Maybe<Tickets_Stddev_Fields>;
  stddev_pop?: Maybe<Tickets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tickets_Stddev_Samp_Fields>;
  sum?: Maybe<Tickets_Sum_Fields>;
  var_pop?: Maybe<Tickets_Var_Pop_Fields>;
  var_samp?: Maybe<Tickets_Var_Samp_Fields>;
  variance?: Maybe<Tickets_Variance_Fields>;
};


/** aggregate fields of "tickets" */
export type Tickets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tickets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tickets" */
export type Tickets_Aggregate_Order_By = {
  avg?: Maybe<Tickets_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tickets_Max_Order_By>;
  min?: Maybe<Tickets_Min_Order_By>;
  stddev?: Maybe<Tickets_Stddev_Order_By>;
  stddev_pop?: Maybe<Tickets_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tickets_Stddev_Samp_Order_By>;
  sum?: Maybe<Tickets_Sum_Order_By>;
  var_pop?: Maybe<Tickets_Var_Pop_Order_By>;
  var_samp?: Maybe<Tickets_Var_Samp_Order_By>;
  variance?: Maybe<Tickets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tickets" */
export type Tickets_Arr_Rel_Insert_Input = {
  data: Array<Tickets_Insert_Input>;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};

/** aggregate avg on columns */
export type Tickets_Avg_Fields = {
  __typename?: 'tickets_avg_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tickets" */
export type Tickets_Avg_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export type Tickets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tickets_Bool_Exp>>>;
  _not?: Maybe<Tickets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tickets_Bool_Exp>>>;
  contract?: Maybe<Contracts_Bool_Exp>;
  contract_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  opening_date?: Maybe<Date_Comparison_Exp>;
  payment?: Maybe<Payments_Bool_Exp>;
  payment_id?: Maybe<Int_Comparison_Exp>;
  project_manager?: Maybe<Project_Managers_Bool_Exp>;
  project_manager_id?: Maybe<Int_Comparison_Exp>;
  ticket_type?: Maybe<Ticket_Types_Bool_Exp>;
  tieck_type_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint */
  TicketPkey = 'ticket_pkey'
}

/** input type for incrementing integer column in table "tickets" */
export type Tickets_Inc_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager_id?: Maybe<Scalars['Int']>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  contract?: Maybe<Contracts_Obj_Rel_Insert_Input>;
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  opening_date?: Maybe<Scalars['date']>;
  payment?: Maybe<Payments_Obj_Rel_Insert_Input>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager?: Maybe<Project_Managers_Obj_Rel_Insert_Input>;
  project_manager_id?: Maybe<Scalars['Int']>;
  ticket_type?: Maybe<Ticket_Types_Obj_Rel_Insert_Input>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  opening_date?: Maybe<Scalars['date']>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager_id?: Maybe<Scalars['Int']>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "tickets" */
export type Tickets_Max_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opening_date?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  opening_date?: Maybe<Scalars['date']>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager_id?: Maybe<Scalars['Int']>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "tickets" */
export type Tickets_Min_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opening_date?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "tickets" */
export type Tickets_Mutation_Response = {
  __typename?: 'tickets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tickets>;
};

/** input type for inserting object relation for remote table "tickets" */
export type Tickets_Obj_Rel_Insert_Input = {
  data: Tickets_Insert_Input;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};

/** on conflict condition type for table "tickets" */
export type Tickets_On_Conflict = {
  constraint: Tickets_Constraint;
  update_columns: Array<Tickets_Update_Column>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** ordering options when selecting data from "tickets" */
export type Tickets_Order_By = {
  contract?: Maybe<Contracts_Order_By>;
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  opening_date?: Maybe<Order_By>;
  payment?: Maybe<Payments_Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager?: Maybe<Project_Managers_Order_By>;
  project_manager_id?: Maybe<Order_By>;
  ticket_type?: Maybe<Ticket_Types_Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "tickets" */
export type Tickets_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  OpeningDate = 'opening_date',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  ProjectManagerId = 'project_manager_id',
  /** column name */
  TieckTypeId = 'tieck_type_id'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  opening_date?: Maybe<Scalars['date']>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager_id?: Maybe<Scalars['Int']>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tickets_Stddev_Fields = {
  __typename?: 'tickets_stddev_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tickets" */
export type Tickets_Stddev_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tickets_Stddev_Pop_Fields = {
  __typename?: 'tickets_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tickets" */
export type Tickets_Stddev_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tickets_Stddev_Samp_Fields = {
  __typename?: 'tickets_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tickets" */
export type Tickets_Stddev_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tickets_Sum_Fields = {
  __typename?: 'tickets_sum_fields';
  contract_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payment_id?: Maybe<Scalars['Int']>;
  project_manager_id?: Maybe<Scalars['Int']>;
  tieck_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tickets" */
export type Tickets_Sum_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  Id = 'id',
  /** column name */
  OpeningDate = 'opening_date',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  ProjectManagerId = 'project_manager_id',
  /** column name */
  TieckTypeId = 'tieck_type_id'
}

/** aggregate var_pop on columns */
export type Tickets_Var_Pop_Fields = {
  __typename?: 'tickets_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tickets" */
export type Tickets_Var_Pop_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tickets_Var_Samp_Fields = {
  __typename?: 'tickets_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tickets" */
export type Tickets_Var_Samp_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tickets_Variance_Fields = {
  __typename?: 'tickets_variance_fields';
  contract_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  payment_id?: Maybe<Scalars['Float']>;
  project_manager_id?: Maybe<Scalars['Float']>;
  tieck_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tickets" */
export type Tickets_Variance_Order_By = {
  contract_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_id?: Maybe<Order_By>;
  project_manager_id?: Maybe<Order_By>;
  tieck_type_id?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type GetPmQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPmQuery = (
  { __typename?: 'query_root' }
  & {
    project_managers: Array<(
      { __typename?: 'project_managers' }
      & Pick<Project_Managers, 'id' | 'name'>
    )>
  }
);


export const GetPmDocument = gql`
    query getPm {
  project_managers {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPm(variables?: GetPmQueryVariables): Promise<GetPmQuery> {
      return withWrapper(() => client.request<GetPmQuery>(print(GetPmDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;