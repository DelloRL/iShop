-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-10-2021 a las 21:16:13
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ishopecommerce`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `cartItem_id` int(11) NOT NULL,
  `amount` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartitem`
--

CREATE TABLE `cartitem` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `category` varchar(20) NOT NULL,
  `price` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `category`, `price`) VALUES
(1, 'iPhone 12 mini', 'El chip A14 Bionic es el más rápido en un smartphone.Y supera los lí­mites de todo lo que era posible hacer hasta ahora.Como procesar billones de operaciones en el Neural Engine.', 'iphone12miniazul.png', 'IPhones', '15000'),
(2, 'iPhone 12', 'El iPhone 12 tiene el chip A14 Bionic, el más rápido en un smartphone.Una pantalla OLED de borde a borde.Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas.', 'iPhone12negro.png', 'IPhones', '19000'),
(3, 'iPhone 12 PRO', 'El Chip A14 Bionic, el más rápido en un smartphone.Y un sistema de cámaras Pro para tomar fotos increíbles con poca luz,que alcanza su máxima expresión en el iPhone 12 Pro Max.', 'iPhone12progrfito.png', 'IPhones', '18500'),
(4, 'iPhone XR', 'El iPhone XR tiene el LCD más avanzado en un smartphone:una pantalla Liquid Retina de 6,1 pulgadas con la mayor precisión de color de la industria y un innovador diseño retroiluminadoque lleva esta increíble pantalla hasta las esquinas', 'XrBlack.png', 'IPhones', '18750'),
(5, 'iPhone 12 ProMax', 'Un salto al siguiente nivel. El chip A14 Bionic es muy superior a cualquier otro chip de smartphone.El sistema de cámaras Pro te permite tomar fotos espectaculares con poca luz, y el iPhone 12 Pro Max lleva tu talento fotográfico mucho más allá.', 'iPhone12ProMaxFam.png', 'IPhones', '19500'),
(6, 'AirPods Caja', 'Los nuevos AirPods te brindan una experiencia inalámbrica nueva. Sólo sácalos del estuche de carga y estarán listos para que los uses con tu iPhone, Apple Watch, iPad o Mac.', 'auricularesAirPodsCaja.png', 'Auriculares', '6500'),
(7, 'AirPods Pro', 'Los AirPods Pro fueron diseñados con Cancelación Activa de Ruido para brindarte un sonido inmersivo, con el modo Transparencia para que puedas oír lo que sucede a tu alrededor', 'auricularesAirPods.png', 'Auriculares', '7050'),
(8, 'EarPods', 'A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods está definido por la geometría del oído. Esto los hace más cómodos de usar que cualquier otro audífono similar.', 'auricularesEarPods.jpg', 'Auriculares', '3500'),
(9, 'Funda ProMax', 'Esta funda de silicón, diseñada especialmente por Apple para el iPhone 12 Pro Max se adapta perfectamente.', 'fundaProMax.png', 'Fundas y protección', '2500'),
(10, 'Funda Tech', 'Con FlexShock, un material híbrido único que absorbe, disipa y repele la fuerza de impacto lejos de su dispositivo', 'fundaTech.png', 'Fundas y protección', '4050'),
(11, 'Funda iPhone 12', 'La funda de silicón con MagSafe diseñada por Apple especialmente para el iPhone 12 | 12 Pro es una alternativa ideal de protección.', 'fundaiphone12pro.png', 'Fundas y protección', '7500'),
(12, 'iPhone de la saladuk', 'Es un iPhone salado', 'producto-1630705007767.png', 'IPhones', '12500');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `avatar`, `password`, `role`) VALUES
(1, 'El Perrito', 'perrito@hotmail.com', 'avatar-1633049722335.png', '$2a$10$v3a5C0YixCWIEmNqyHC3dOoTMWtBqMnmTcB3RTrov8o015S8j8agG', 9),
(2, 'Franco Mazu', 'FranMazu@gmail.com', 'avatar-1633067305604.jpg', '$2a$10$2U908KZFizco2aFMdQCpLO7SPQHDtwxnXH2xlIS16ADYuf1aA1jr', 9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartItem_id` (`cartItem_id`);

--
-- Indices de la tabla `cartitem`
--
ALTER TABLE `cartitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cartitem`
--
ALTER TABLE `cartitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`cartItem_id`) REFERENCES `cartitem` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `cartitem`
--
ALTER TABLE `cartitem`
  ADD CONSTRAINT `cartitem_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `cartitem_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;