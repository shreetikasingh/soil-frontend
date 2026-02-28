// Crop database with icons and descriptions (DATASET ALIGNED)
export const cropDatabase = {
  Rice: {
    icon: "wheat",
    desc: "Ideal for high rainfall, high humidity, and clayey soil."
  },
  Maize: {
    icon: "leaf",
    desc: "Requires warm climate and fertile, well-drained soil."
  },
  Chickpea: {
    icon: "bean",
    desc: "Grows well in cool, dry climates with low rainfall."
  },
  Kidneybeans: {
    icon: "bean",
    desc: "Needs moderate temperature and well-drained loamy soil."
  },
  Pigeonpeas: {
    icon: "leaf",
    desc: "Thrives in semi-arid regions and improves soil fertility."
  },
  Mothbeans: {
    icon: "bean",
    desc: "Drought-resistant crop suitable for arid regions."
  },
  Mungbean: {
    icon: "bean",
    desc: "Short-duration crop requiring warm climate."
  },
  Blackgram: {
    icon: "bean",
    desc: "Grows well in warm climate with moderate rainfall."
  },
  Lentil: {
    icon: "grain",
    desc: "Cool-season crop suitable for dry conditions."
  },
  Pomegranate: {
    icon: "apple",
    desc: "Thrives in semi-arid climate with well-drained soil."
  },
  Banana: {
    icon: "banana",
    desc: "Requires warm climate, high humidity, and rich soil."
  },
  Mango: {
    icon: "trees",
    desc: "Best grown in tropical climate with dry harvesting season."
  },
  Grapes: {
    icon: "grape",
    desc: "Requires warm climate and well-drained sandy soil."
  },
  Watermelon: {
    icon: "droplet",
    desc: "Needs warm temperature and sandy loam soil."
  },
  Muskmelon: {
    icon: "droplet",
    desc: "Grows best in warm climate with low humidity."
  },
  Apple: {
    icon: "apple",
    desc: "Requires cold climate and well-drained loamy soil."
  },
  Orange: {
    icon: "citrus",
    desc: "Thrives in subtropical climate with moderate rainfall."
  },
  Papaya: {
    icon: "leaf",
    desc: "Fast-growing crop needing warm temperature."
  },
  Coconut: {
    icon: "trees",
    desc: "Requires coastal climate with high humidity."
  },
  Coffee: {
    icon: "coffee",
    desc: "Needs cool climate, shade, and adequate rainfall."
  },
  Cotton: {
    icon: "flower-2",
    desc: "Best grown in black soil with warm climate."
  },
  Jute: {
    icon: "leaf",
    desc: "Needs warm, humid climate and alluvial soil."
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
