import json
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

with open(DATA_DIR / "routine_rules.json", "r", encoding="utf-8") as f:
    ROUTINE_RULES = json.load(f)


def analyze_routine(routine_step, ingredients):
    warnings = []
    notes = []

    routine_step = routine_step.lower()
    routine_order = ROUTINE_RULES["routine_order"]

    if routine_step not in routine_order:
        warnings.append("Unknown routine step provided")

    # Step-specific notes
    step_rules = ROUTINE_RULES.get("step_specific_rules", {})
    if routine_step in step_rules:
        notes.append(step_rules[routine_step]["notes"])

    # Ingredient conflict detection (basic)
    ingredient_set = set(i.lower() for i in ingredients)

    for conflict in ROUTINE_RULES["conflicting_ingredients"]:
        conflict_set = set(conflict["ingredients"])
        if conflict_set.intersection(ingredient_set):
            warnings.append(conflict["reason"])

    return {
        "routine_step": routine_step,
        "notes": notes,
        "warnings": warnings
    }
