import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

with open(DATA_DIR / "authenticity_rules.json", "r", encoding="utf-8") as f:
    AUTH_RULES = json.load(f)


def analyze_authenticity(ingredients):
    score = 100
    reasons = []

    # Rule 1: Too few ingredients
    if len(ingredients) < AUTH_RULES["minimum_ingredient_count"]:
        score -= AUTH_RULES["penalties"]["too_few_ingredients"]
        reasons.append("Ingredient list is unusually short")

    # Rule 2: Suspicious marketing claims
    for ing in ingredients:
        ing_lower = ing.lower()
        for pattern in AUTH_RULES["suspicious_patterns"]:
            if pattern in ing_lower:
                score -= AUTH_RULES["penalties"]["suspicious_claim"]
                reasons.append("Contains suspicious marketing terminology")

    # Rule 3: Unusual ordering (very basic heuristic)
    if ingredients != sorted(ingredients, key=lambda x: x.lower()):
        score -= AUTH_RULES["penalties"]["unusual_ordering"]
        reasons.append("Ingredient ordering appears inconsistent")

    # Final confidence level
    if score >= 70:
        level = "High"
    elif score >= 40:
        level = "Medium"
    else:
        level = "Low"

    return {
        "level": level,
        "score": score,
        "reasons": reasons
    }
