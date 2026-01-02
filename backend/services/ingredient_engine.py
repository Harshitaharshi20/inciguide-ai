import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

def load_ingredients_db():
    with open(DATA_DIR / "ingredients.json", "r", encoding="utf-8") as f:
        return json.load(f)


INGREDIENTS_DB = load_ingredients_db()


def analyze_ingredients(ingredients, skin_type):
    results = []

    for ing in ingredients:
        key = ing.lower()
        info = INGREDIENTS_DB.get(key)

        if not info:
            continue

        warning = None
        if skin_type in info.get("avoid_for", []):
            warning = f"Not recommended for {skin_type} skin"

        results.append({
            "ingredient": ing,
            "risk": info["risk"],
            "warning": warning,
            "description": info["description"]
        })

    return results
