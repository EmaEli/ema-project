// Color palette
enum Red {
  V10 = '#FFE8EB', // Light red
  V20 = '#F3B5BC', // Soft red
  V30 = '#D11F35', // Bright red
  V40 = '#A01323', // Deep red
}

enum Orange {
  V10 = '#FFE9CF', // Pale orange
  V20 = '#F5BE95', // Soft orange
  V30 = '#FF8328', // Bright orange
  V40 = '#B84200', // Deep orange
}

enum Yellow {
  V10 = '#FFFBE6', // Pale yellow
  V20 = '#FFF1B3', // Soft yellow
  V30 = '#FFE766', // Bright yellow
  V40 = '#FFD000', // Yellow base
  V50 = '#C7A600', // Deep yellow
}

enum KellyGreen {
  V30 = '#009639', // Bright green
  V40 = '#007A2F', // Deep green
}

enum SpringGreen {
  V10 = '#F5FCEE', // Pale green
  V20 = '#DBF2C0', // Soft green
  V30 = '#B8E574', // Bright spring green
  V40 = '#79D100', // Deep spring green
}

enum Teal {
  V10 = '#D3F6F2', // Pale teal
  V20 = '#A6E0D9', // Soft teal
  V30 = '#00756A', // Bright teal
  V40 = '#006158', // Deep teal
}

enum Blue {
  V10 = '#F2FAFD', // Pale blue
  V20 = '#DFF3FB', // Soft blue
  V30 = '#C4E5F2', // Bright blue
  V40 = '#41B6E6', // Sky blue
  V50 = '#0075A3', // Deep blue
}

enum Purple {
  V10 = '#F4EAFB', // Pale lavender
  V20 = '#DCC7F6', // Lavender
  V30 = '#B790E3', // Purple light
  V40 = '#8F4DD7', // Purple base
  V50 = '#6721AB', // Deep purple
}

enum Pink {
  V10 = '#FFE5F0', // Pale pink
  V20 = '#FFC1DA', // Soft pink
  V30 = '#FF85B1', // Bright pink
  V40 = '#E84884', // Deep pink
  V50 = '#B72262', // Dark pink
}

enum Neutral {
  V00 = '#FFFFFF', // White
  V10 = '#F9F9F9', // Extra light gray
  V20 = '#F4F4F4', // Light gray
  V30 = '#ECECEC', // Gray
  V40 = '#D3D3D3', // Medium gray
  V50 = '#707070', // Dark gray
  V60 = '#505050', // Extra dark gray
  V70 = '#252631', // Near black,
  V80 = '#121212', // Almost Black,
}

export type ColorTone =
  | Red
  | Orange
  | Yellow
  | KellyGreen
  | SpringGreen
  | Teal
  | Blue
  | Purple
  | Pink
  | Neutral;

export const Color = Object.freeze({
  Red,
  Orange,
  Yellow,
  KellyGreen,
  SpringGreen,
  Teal,
  Blue,
  Purple,
  Pink,
  Neutral,
});
