-- CreateTable
CREATE TABLE "Cit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cob" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CitToCob" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CitToCob_AB_unique" ON "_CitToCob"("A", "B");

-- CreateIndex
CREATE INDEX "_CitToCob_B_index" ON "_CitToCob"("B");

-- AddForeignKey
ALTER TABLE "_CitToCob" ADD CONSTRAINT "_CitToCob_A_fkey" FOREIGN KEY ("A") REFERENCES "Cit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CitToCob" ADD CONSTRAINT "_CitToCob_B_fkey" FOREIGN KEY ("B") REFERENCES "Cob"("id") ON DELETE CASCADE ON UPDATE CASCADE;
