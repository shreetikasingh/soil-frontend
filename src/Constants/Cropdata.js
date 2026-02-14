export const cropDatabase = {
  'Rice': { icon: 'wheat', desc: 'Ideal for high rainfall and humidity conditions with clayey soil.' },
  'Wheat': { icon: 'wheat', desc: 'Best suited for moderate temperatures and loamy soil with good drainage.' },
  'Maize': { icon: 'crop', desc: 'Requires warm temperatures and well-drained fertile soil.' },
  'Cotton': { icon: 'flower-2', desc: 'Thrives in warm climates with moderate rainfall and black soil.' },
  'Sugarcane': { icon: 'trees', desc: 'Needs high temperatures and abundant water supply.' },
  'Barley': { icon: 'wheat', desc: 'Tolerates cooler temperatures and requires less water than wheat.' },
  'Millets': { icon: 'grain', desc: 'Drought-resistant crops suitable for low rainfall areas.' },
  'Pulses': { icon: 'bean', desc: 'Nitrogen-fixing crops that improve soil fertility.' },
  'Coffee': { icon: 'coffee', desc: 'Requires moderate temperatures, high altitude, and shade.' },
  'Tea': { icon: 'leaf', desc: 'Needs acidic soil, high rainfall, and cool temperatures.' }
};

// Mock ML Prediction Algorithm - REPLACE WITH ACTUAL API CALL
export const simulateMLPrediction = (data) => {
  let recommendedCrop = 'Wheat';
  let confidence = 85 + Math.random() * 10;
  
  if (data.rainfall > 200 && data.humidity > 70) {
    recommendedCrop = 'Rice';
  } else if (data.temperature > 30 && data.rainfall < 100) {
    recommendedCrop = 'Cotton';
  } else if (data.ph < 6.0 && data.temperature < 25) {
    recommendedCrop = 'Tea';
  } else if (data.nitrogen > 80 && data.phosphorus > 40) {
    recommendedCrop = 'Maize';
  } else if (data.rainfall < 80) {
    recommendedCrop = 'Millets';
  }
  
  const crops = Object.keys(cropDatabase).filter(c => c !== recommendedCrop);
  const alternatives = crops.sort(() => 0.5 - Math.random()).slice(0, 3).map(crop => ({
    name: crop,
    confidence: Math.floor(60 + Math.random() * 20),
    ...cropDatabase[crop]
  }));
  
  return {
    mainCrop: recommendedCrop,
    confidence: Math.floor(confidence),
    description: cropDatabase[recommendedCrop]?.desc || 'Suitable crop for your conditions.',
    alternatives: alternatives
  };
};