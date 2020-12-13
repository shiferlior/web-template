CREATE TABLE "public"."contracts"("id" serial NOT NULL, "property_id" integer NOT NULL, "arnona_pay_by_renters" boolean, "electricity_pay_by_renters" boolean, "water_pay_by_renters" boolean, "vaad_pay_by_renters" boolean, "gas_pay_by_renters" boolean, "internet_pay_by_renters" boolean, "start_date" date, "end_date" date, "link_to_s3" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("property_id") REFERENCES "public"."properties"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_contracts_updated_at"
BEFORE UPDATE ON "public"."contracts"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_contracts_updated_at" ON "public"."contracts" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
