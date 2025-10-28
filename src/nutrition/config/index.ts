import { Nutrition } from "core-types";

interface NutritionConfig {
  gender: {
    male: Nutrition.Gender;
    female: Nutrition.Gender;
  };
  activityLevel: {
    sedentary: Nutrition.ActivityLevel;
    lightlyActive: Nutrition.ActivityLevel;
    moderatelyActive: Nutrition.ActivityLevel;
    veryActive: Nutrition.ActivityLevel;
    superActive: Nutrition.ActivityLevel;
  };
  caloriesGoal: {
    loose: Nutrition.CaloriesGoal
    maintain: Nutrition.CaloriesGoal
    gain: Nutrition.CaloriesGoal
  }
}


const config: NutritionConfig = {
  gender: {
    male: 'MALE',
    female: 'FEMALE',
  },
  activityLevel: {
    sedentary: 'SEDENTARY',
    lightlyActive: 'LIGHTLY_ACTIVE',
    moderatelyActive: 'MODERATELY_ACTIVE',
    veryActive: 'VERY_ACTIVE',
    superActive: 'SUPER_ACTIVE',
  },
  caloriesGoal: {
    loose: 'LOOSE',
    maintain: 'MAINTAIN',
    gain: 'GAIN',
  }
};

export default config;