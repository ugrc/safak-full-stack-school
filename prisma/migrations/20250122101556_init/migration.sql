/*
  Warnings:

  - You are about to drop the column `active` on the `Cit` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Cit` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.
  - You are about to alter the column `description` on the `Cit` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "Cit" DROP COLUMN "active",
ADD COLUMN     "adfId" INTEGER,
ADD COLUMN     "articleNo" INTEGER,
ADD COLUMN     "complianceScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "contentType" VARCHAR(20),
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN,
ADD COLUMN     "paraOrder" INTEGER,
ADD COLUMN     "paraType" VARCHAR(20),
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "reference" VARCHAR(100),
ADD COLUMN     "updatedAt" TIMESTAMP(3),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(200),
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000);

-- AlterTable
ALTER TABLE "Cob" ADD COLUMN     "category" TEXT,
ADD COLUMN     "classfication" TEXT,
ADD COLUMN     "complianceScore" INTEGER,
ADD COLUMN     "isActive" BOOLEAN DEFAULT false,
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "reference" TEXT,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "FuntionalDomain" (
    "name" VARCHAR(200) NOT NULL,
    "description" VARCHAR(500),
    "value" VARCHAR(200) NOT NULL,
    "class" VARCHAR(200),
    "isActive" BOOLEAN
);

-- CreateTable
CREATE TABLE "Adf" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "commonName" VARCHAR(100),
    "description" VARCHAR(500),
    "regulationType" TEXT,
    "annNo" VARCHAR(40),
    "annAgency" VARCHAR(100),
    "annBody" VARCHAR(1000),
    "state" VARCHAR(20),
    "body" TEXT,
    "orginalUrl" TEXT,
    "documentedOn" TIMESTAMP(3),
    "publishedOn" TIMESTAMP(3),
    "effectiveOn" TIMESTAMP(3),
    "expiredOn" TIMESTAMP(3),
    "functionalDomains" TEXT NOT NULL,

    CONSTRAINT "Adf_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pol" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" VARCHAR(500),
    "type" TEXT,
    "state" TEXT,
    "complianceScore" INTEGER,
    "parentId" INTEGER,

    CONSTRAINT "Pol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ctl" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "weight" INTEGER DEFAULT 10,
    "state" TEXT,
    "status" TEXT,
    "function" TEXT,
    "isExempted" BOOLEAN,
    "cobId" INTEGER NOT NULL,
    "entityId" INTEGER NOT NULL,
    "ownerID" INTEGER,

    CONSTRAINT "Ctl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Att" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" TEXT,
    "dueDate" TIMESTAMP(3),
    "expiredDate" TIMESTAMP(3),
    "result" TEXT,
    "evidenceName" TEXT,
    "evidenceSize" INTEGER,
    "evidenceType" TEXT,
    "evidenceComment" TEXT,
    "ctlId" INTEGER NOT NULL,
    "entityId" INTEGER NOT NULL,
    "ownerID" INTEGER,

    CONSTRAINT "Att_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indicator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "Category" TEXT,
    "type" TEXT,
    "targetType" TEXT,
    "resultRule" TEXT,
    "frequency" TEXT,
    "nextRunDate" TIMESTAMP(3),
    "dueDuration" INTEGER,
    "firstRunDate" TIMESTAMP(3),
    "status" TEXT,
    "prevStatus" TEXT,

    CONSTRAINT "Indicator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndicatorResult" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isPassed" BOOLEAN NOT NULL,
    "indicatorId" INTEGER NOT NULL,

    CONSTRAINT "IndicatorResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndicatorTask" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" TEXT,
    "result" TEXT,

    CONSTRAINT "IndicatorTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "state" TEXT DEFAULT 'New',
    "priority" TEXT,
    "resource" TEXT,
    "type" TEXT,
    "ownerID" INTEGER,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AdfSupersedement" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AdfDependency" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CobToPol" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FuntionalDomain_name_key" ON "FuntionalDomain"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AdfSupersedement_AB_unique" ON "_AdfSupersedement"("A", "B");

-- CreateIndex
CREATE INDEX "_AdfSupersedement_B_index" ON "_AdfSupersedement"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AdfDependency_AB_unique" ON "_AdfDependency"("A", "B");

-- CreateIndex
CREATE INDEX "_AdfDependency_B_index" ON "_AdfDependency"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CobToPol_AB_unique" ON "_CobToPol"("A", "B");

-- CreateIndex
CREATE INDEX "_CobToPol_B_index" ON "_CobToPol"("B");

-- AddForeignKey
ALTER TABLE "Pol" ADD CONSTRAINT "Pol_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Pol"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cit" ADD CONSTRAINT "Cit_adfId_fkey" FOREIGN KEY ("adfId") REFERENCES "Adf"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cit" ADD CONSTRAINT "Cit_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Cit"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cob" ADD CONSTRAINT "Cob_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Cob"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ctl" ADD CONSTRAINT "Ctl_cobId_fkey" FOREIGN KEY ("cobId") REFERENCES "Cob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ctl" ADD CONSTRAINT "Ctl_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ctl" ADD CONSTRAINT "Ctl_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Att" ADD CONSTRAINT "Att_ctlId_fkey" FOREIGN KEY ("ctlId") REFERENCES "Ctl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Att" ADD CONSTRAINT "Att_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Att" ADD CONSTRAINT "Att_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndicatorResult" ADD CONSTRAINT "IndicatorResult_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "Indicator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdfSupersedement" ADD CONSTRAINT "_AdfSupersedement_A_fkey" FOREIGN KEY ("A") REFERENCES "Adf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdfSupersedement" ADD CONSTRAINT "_AdfSupersedement_B_fkey" FOREIGN KEY ("B") REFERENCES "Adf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdfDependency" ADD CONSTRAINT "_AdfDependency_A_fkey" FOREIGN KEY ("A") REFERENCES "Adf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdfDependency" ADD CONSTRAINT "_AdfDependency_B_fkey" FOREIGN KEY ("B") REFERENCES "Adf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CobToPol" ADD CONSTRAINT "_CobToPol_A_fkey" FOREIGN KEY ("A") REFERENCES "Cob"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CobToPol" ADD CONSTRAINT "_CobToPol_B_fkey" FOREIGN KEY ("B") REFERENCES "Pol"("id") ON DELETE CASCADE ON UPDATE CASCADE;
