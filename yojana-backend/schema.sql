-- Table structure for category
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for subcategory
CREATE TABLE IF NOT EXISTS `tbl_sub_category` (
  `subcategory_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `sub_category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`subcategory_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `tbl_sub_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for yojana type
CREATE TABLE IF NOT EXISTS `tbl_yojana_type` (
  `yojana_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `yojana_type` varchar(200) NOT NULL,
  PRIMARY KEY (`yojana_id`),
  KEY `category_id` (`category_id`),
  KEY `subcategory_id` (`subcategory_id`),
  CONSTRAINT `tbl_yojana_type_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`category_id`),
  CONSTRAINT `tbl_yojana_type_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `tbl_sub_category` (`subcategory_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table structure for yojana year
CREATE TABLE IF NOT EXISTS `tbl_yojana_year` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` varchar(4) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert sample years into yojana_year table
INSERT INTO `tbl_yojana_year` (`year`, `is_active`) VALUES 
('2020', 1),
('2021', 1),
('2022', 1),
('2023', 1),
('2024', 1),
('2025', 1),
('2026', 1),
('2027', 1),
('2028', 1),
('2029', 1),
('2030', 1);

-- Table structure for applications
CREATE TABLE IF NOT EXISTS `tbl_applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aadhar` varchar(12) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `beneficiary_type` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `yojana_type` varchar(200) NOT NULL,
  `bank_name` varchar(200) NOT NULL,
  `ifsc` varchar(20) NOT NULL,
  `account_no` varchar(50) NOT NULL,
  `amount_paid` varchar(50) DEFAULT NULL,
  `mobile_number` varchar(15) NOT NULL,
  `yojana_year_id` int(11) NOT NULL,
  `documents` text DEFAULT NULL,
  `status` varchar(20) DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `subcategory_id` (`subcategory_id`),
  KEY `yojana_year_id` (`yojana_year_id`),
  CONSTRAINT `tbl_applications_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `tbl_category` (`category_id`),
  CONSTRAINT `tbl_applications_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `tbl_sub_category` (`subcategory_id`),
  CONSTRAINT `tbl_applications_ibfk_3` FOREIGN KEY (`yojana_year_id`) REFERENCES `tbl_yojana_year` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 