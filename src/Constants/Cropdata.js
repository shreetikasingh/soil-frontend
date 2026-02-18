// Crop database with icons and descriptions
export const cropDatabase = {
  Rice: {
    icon: "wheat",
    desc: "Ideal for high rainfall and humid conditions with clay soil."
  },
  Wheat: {
    icon: "wheat",
    desc: "Suitable for moderate temperature and well-drained loamy soil."
  },
  Maize: {
    icon: "leaf",
    desc: "Requires warm weather and fertile well-drained soil."
  },
  Cotton: {
    icon: "flower-2",
    desc: "Best grown in black soil with warm temperature."
  },
  Sugarcane: {
    icon: "trees",
    desc: "Needs high temperature, humidity, and plenty of water."
  },
  Barley: {
    icon: "wheat",
    desc: "Grows well in cooler climates."
  },
  Millets: {
    icon: "grain",
    desc: "Drought resistant crop."
  },
  Pulses: {
    icon: "bean",
    desc: "Improves soil fertility."
  },
  Coffee: {
    icon: "coffee",
    desc: "Requires cool climate and altitude."
  },
  Tea: {
    icon: "leaf",
    desc: "Needs acidic soil and rainfall."
  }
};

// 🔥 THIS IS THE ONLY FUNCTION YOUR FRONTEND CALLS
export const simulateMLPrediction = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // ❌ do NOT depend on data.success
    if (!data.crop) {
      throw new Error("Invalid response from backend");
    }

    // 🔁 normalize backend crop → frontend key
    const cropKey =
      Object.keys(cropDatabase).find(
        (key) => key.toLowerCase() === data.crop.toLowerCase()
      ) || data.crop;

    return {
      mainCrop: cropKey,
      confidence: Number(data.confidence?.toFixed(2)) || 0,
      description: cropDatabase[cropKey]?.desc || "No description available.",
      icon: cropDatabase[cropKey]?.icon || "leaf",
      alternatives: [],
    };
  } catch (error) {
    console.error("Prediction Error:", error);

    return {
      mainCrop: "Error",
      confidence: 0,
      description: "Backend not reachable or invalid response.",
      icon: "alert-circle",
      alternatives: [],
    };
  }
};
