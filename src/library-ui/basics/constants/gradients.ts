// Gradient palette
enum RedGradient {
  V10 = 'linear-gradient(150deg, #EB5B6D 0%, #FF8998 100%)',
  V20 = 'linear-gradient(150deg, #D65565 0%, #EB5B6D 61.98%, #FF8998 100%)',
}

enum OrangeGradient {
  V10 = 'linear-gradient(90deg, #FFA45B 0%, #FF8328 100%)',
  V20 = 'linear-gradient(90deg, #FF851E 23.2%, #FFA20F 100%, #FFA20F 100%)',
}

enum YellowGradient {
  V10 = 'linear-gradient(90deg, #FFE766 0%, #FFD000 100%)',
  V20 = 'linear-gradient(145deg, #FFFBE6 0%, #FFF1B3 50%, #FFD000 100%)',
}

enum SpringGreenGradient {
  V10 = 'linear-gradient(90deg, #79D100 0%, #DBF2C000 100%)',
  V20 = 'linear-gradient(90deg, #F0FAE6 0%, #F9FFF3 100%)',
  V30 = 'linear-gradient(270deg, #79D100 0%, #C6F387 100%)',
}

enum TealGradient {
  V10 = 'linear-gradient(150deg, #008D7F 0%, #42AAA0 58.33%, #72C8BF 100%)',
  V20 = 'linear-gradient(145deg, #00685E 0%, #00958A 63.37%, #80CAC6 100%)',
}

enum BlueGradient {
  V10 = 'linear-gradient(180deg, #CFEDF9 0%, #41B6E6 100%)',
  V20 = 'linear-gradient(150deg, #41B6E6 0%, #71C8EC 50%, #A0DAF2 100%)',
}

enum PurpleGradient {
  V10 = 'linear-gradient(145deg, #F4EAFB 0%, #DCC7F6 100%)',
  V20 = 'linear-gradient(145deg, #B790E3 0%, #8F4DD7 100%)',
}

enum PinkGradient {
  V10 = 'linear-gradient(150deg, #FFE5F0 0%, #FFC1DA 100%)',
  V20 = 'linear-gradient(150deg, #FF85B1 0%, #E84884 100%)',
}

enum NeutralGradient {
  V10 = 'linear-gradient(90deg, #F9F9F9 0%, #ECECEC 100%)',
  V20 = 'linear-gradient(113deg, #D3D3D3 0%, #F4F4F4 100%)',
}

export type GradientTone =
  | RedGradient
  | OrangeGradient
  | YellowGradient
  | SpringGreenGradient
  | TealGradient
  | BlueGradient
  | PurpleGradient
  | PinkGradient
  | NeutralGradient;

export const Gradient = Object.freeze({
  RedGradient,
  OrangeGradient,
  YellowGradient,
  SpringGreenGradient,
  TealGradient,
  BlueGradient,
  PurpleGradient,
  PinkGradient,
  NeutralGradient,
});
