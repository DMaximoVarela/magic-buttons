-- CreateTable
CREATE TABLE "Button" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,
    "tamano" TEXT NOT NULL,
    "estilo" TEXT NOT NULL,
    "htmlCode" TEXT NOT NULL,
    "cssCode" TEXT NOT NULL,
    "tailwindCode" TEXT NOT NULL,

    CONSTRAINT "Button_pkey" PRIMARY KEY ("id")
);
