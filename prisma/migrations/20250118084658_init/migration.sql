-- CreateTable
CREATE TABLE "EntityTier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "label" TEXT NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "EntityTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isRoot" BOOLEAN,
    "functionalDomain" TEXT,
    "complianceScore" INTEGER,
    "tierId" INTEGER,

    CONSTRAINT "EntityClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "functionalDomain" TEXT,
    "complianceScore" INTEGER,

    CONSTRAINT "EntityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "departmentHead" TEXT,
    "primaryContact" TEXT,
    "parentID" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "Title" TEXT,
    "calendar" TEXT,
    "timeZone" TEXT,
    "businessPhone" TEXT,
    "mobilePhone" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "lockedOut" BOOLEAN DEFAULT false,
    "passwordNeedsReset" BOOLEAN DEFAULT false,
    "departmentId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "street" TEXT,
    "city" TEXT,
    "province" TEXT,
    "postalCode" TEXT,
    "Country" TEXT,
    "fullName" TEXT,
    "phone" TEXT,
    "faxPhone" TEXT,
    "Parent" TEXT,
    "Latitude" DOUBLE PRECISION,
    "Longitude" DOUBLE PRECISION,
    "contactId" INTEGER,
    "parentID" INTEGER,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN,
    "functionalDomain" TEXT,
    "attestationFreqency" TEXT,
    "complianceScore" INTEGER,
    "ownerId" INTEGER,
    "entityClassId" INTEGER,
    "locationId" INTEGER,
    "departmentId" INTEGER,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RollUpTo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EntityToEntityType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RollUpTo_AB_unique" ON "_RollUpTo"("A", "B");

-- CreateIndex
CREATE INDEX "_RollUpTo_B_index" ON "_RollUpTo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EntityToEntityType_AB_unique" ON "_EntityToEntityType"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityToEntityType_B_index" ON "_EntityToEntityType"("B");

-- AddForeignKey
ALTER TABLE "EntityClass" ADD CONSTRAINT "EntityClass_tierId_fkey" FOREIGN KEY ("tierId") REFERENCES "EntityTier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_entityClassId_fkey" FOREIGN KEY ("entityClassId") REFERENCES "EntityClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RollUpTo" ADD CONSTRAINT "_RollUpTo_A_fkey" FOREIGN KEY ("A") REFERENCES "EntityClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RollUpTo" ADD CONSTRAINT "_RollUpTo_B_fkey" FOREIGN KEY ("B") REFERENCES "EntityClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntityToEntityType" ADD CONSTRAINT "_EntityToEntityType_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntityToEntityType" ADD CONSTRAINT "_EntityToEntityType_B_fkey" FOREIGN KEY ("B") REFERENCES "EntityType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
