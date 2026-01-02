def calculate_confidence(ingredient_analysis, routine_analysis, authenticity):
    score = 100

    # Ingredient-based penalties
    if not ingredient_analysis:
        score -= 30  # Unknown ingredients = uncertainty

    for ing in ingredient_analysis:
        if ing["risk"] == "high":
            score -= 30
        elif ing["risk"] == "medium":
            score -= 15

        if ing.get("warning"):
            score -= 10

    # Routine-based penalties
    if routine_analysis.get("warnings"):
        score -= 20

    # Authenticity-based penalties
    if authenticity["level"] == "Low":
        score -= 20
    elif authenticity["level"] == "Medium":
        score -= 10

    # Clamp score
    score = max(score, 0)

    # Normalize score
    if score >= 70:
        level = "High"
    elif score >= 40:
        level = "Medium"
    else:
        level = "Low"

    return {
        "score": score,
        "level": level
    }
