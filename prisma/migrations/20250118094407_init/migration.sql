/*
  Warnings:

  - You are about to drop the `_RollUpTo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RollUpTo" DROP CONSTRAINT "_RollUpTo_A_fkey";

-- DropForeignKey
ALTER TABLE "_RollUpTo" DROP CONSTRAINT "_RollUpTo_B_fkey";

-- DropTable
DROP TABLE "_RollUpTo";

-- CreateTable
CREATE TABLE "_EntityClassRollUpTo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntityClassRollUpTo_AB_unique" ON "_EntityClassRollUpTo"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityClassRollUpTo_B_index" ON "_EntityClassRollUpTo"("B");

-- AddForeignKey
ALTER TABLE "_EntityClassRollUpTo" ADD CONSTRAINT "_EntityClassRollUpTo_A_fkey" FOREIGN KEY ("A") REFERENCES "EntityClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntityClassRollUpTo" ADD CONSTRAINT "_EntityClassRollUpTo_B_fkey" FOREIGN KEY ("B") REFERENCES "EntityClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;
