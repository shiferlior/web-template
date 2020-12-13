CREATE TABLE "public"."ticket_types"("id" serial NOT NULL, "type" text NOT NULL, "what_to_do" text, PRIMARY KEY ("id") , UNIQUE ("type")); COMMENT ON TABLE "public"."ticket_types" IS E'enum';
