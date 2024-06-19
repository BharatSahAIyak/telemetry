-- CreateTable
CREATE TABLE "MaterializedViewMapping" (
    "id" SERIAL NOT NULL,
    "bot_id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,
    "tableName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaterializedViewMapping_pkey" PRIMARY KEY ("id")
);
