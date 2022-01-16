const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "RIT TOMOZ";
const description = "Rira Institute of Technology TOMOZ";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};



// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 6856,
    layersOrder: [
      { name: "Department" },
      {
        name: "Female-Type",
        options: {
          displayName: "Type"
        },
      },
      {
        name: "Female-Skin",
        options: {
          displayName: "Skin"
        },
      },
      {
        name: "Female-Eye",
        options: {
          displayName: "Eye"
        },
      },
      {
        name: "Female-Mouth",
        options: {
          displayName: "Mouth"
        },
      },
      {
        name: "Female-Glasses",
        options: {
          displayName: "Glasses"
        },
      },
      {
        name: "Female-Hair",
        options: {
          displayName: "Hair"
        },
      },
      {
        name: "Female-Clothes",
        options: {
          displayName: "Clothes"
        },
      },
      {
        name: "Female-Accessori",
        options: {
          displayName: "Accessori"
        },
      },
    ],
  },
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Department" },
      {
        name: "Female-Type",
        options: {
          displayName: "Type"
        },
      },
      {
        name: "Female-Skin",
        options: {
          displayName: "Skin"
        },
      },
      {
        name: "Female-Eye",
        options: {
          displayName: "Eye"
        },
      },
      {
        name: "Female-Mouth",
        options: {
          displayName: "Mouth"
        },
      },
      {
        name: "Female-Glasses",
        options: {
          displayName: "Glasses"
        },
      },
      {
        name: "Female-Hair-WithHat",
        options: {
          displayName: "Hair"
        },
      },
      {
        name: "Female-Clothes",
        options: {
          displayName: "Clothes"
        },
      },
      {
        name: "Female-Accessori",
        options: {
          displayName: "Accessori"
        },
      },
    ],
  },
  {
    growEditionSizeTo: 2956,
    layersOrder: [
      { name: "Department" },
      {
        name: "Male-Type",
        options: {
          displayName: "Type"
        },
      },
      {
        name: "Male-Skin",
        options: {
          displayName: "Skin"
        },
      },
      {
        name: "Male-Eye",
        options: {
          displayName: "Eye"
        },
      },
      {
        name: "Male-Mouth",
        options: {
          displayName: "Mouth"
        },
      },
      {
        name: "Male-Glasses",
        options: {
          displayName: "Glasses"
        },
      },
      {
        name: "Male-Hair",
        options: {
          displayName: "Hair"
        },
      },
      {
        name: "Male-Clothes",
        options: {
          displayName: "Clothes"
        },
      },
      {
        name: "Male-Accessori",
        options: {
          displayName: "Accessori"
        },
      },
    ],
  },
  {
    growEditionSizeTo: 88,
    layersOrder: [
      { name: "Department" },
      {
        name: "Cyborg-Type",
        options: {
          displayName: "Type"
        },
      },
      {
        name: "Cyborg-Skin",
        options: {
          displayName: "Skin"
        },
      },
      {
        name: "Cyborg-Eye",
        options: {
          displayName: "Eye"
        },
      },
      {
        name: "Cyborg-Mouth",
        options: {
          displayName: "Mouth"
        },
      },
      {
        name: "Cyborg-Glasses",
        options: {
          displayName: "Glasses"
        },
      },
      {
        name: "Cyborg-Hair",
        options: {
          displayName: "Hair"
        },
      },
      {
        name: "Cyborg-Clothes",
        options: {
          displayName: "Clothes"
        },
      },
      {
        name: "Cyborg-Accessori",
        options: {
          displayName: "Accessori"
        },
      },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1024,
  height: 1024,
  smoothing: false,
};

const gif = {
  export: true,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
