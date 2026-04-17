-- CreateTable
CREATE TABLE `Compromiso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NULL,
    `mail` VARCHAR(191) NOT NULL,
    `colegio` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `especialista` VARCHAR(191) NOT NULL,
    `youtubeUrl` VARCHAR(191) NOT NULL,
    `duracion` VARCHAR(191) NOT NULL,
    `orden` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Noticia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` TEXT NOT NULL,
    `fuente` VARCHAR(191) NOT NULL,
    `fecha` VARCHAR(191) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `tag` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL DEFAULT '',
    `orden` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Material` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `bg` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL DEFAULT '',
    `orden` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Config` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `heroTitle` VARCHAR(191) NOT NULL,
    `heroSubtitle` VARCHAR(191) NOT NULL,
    `heroDescription` TEXT NOT NULL,
    `heroBadge` VARCHAR(191) NOT NULL,
    `counterLabel` VARCHAR(191) NOT NULL,
    `counterSuffix` VARCHAR(191) NOT NULL,
    `ctaText` VARCHAR(191) NOT NULL,
    `ctaSubtext` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
