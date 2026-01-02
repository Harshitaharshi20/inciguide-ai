def format_final_response(
    product_name,
    skin_type,
    routine_step,
    ingredient_analysis,
    routine_analysis,
    confidence_level,
    confidence_score,
    authenticity
):
    return {
        "product_overview": {
            "product_name": product_name,
            "skin_type": skin_type,
            "routine_step": routine_step
        },
        "ingredient_insights": [
            {
                "ingredient": ing["ingredient"],
                "risk": ing["risk"],
                "warning": ing.get("warning"),
                "description": ing.get("description")
            }
            for ing in ingredient_analysis
        ],
        "routine_guidance": {
            "routine_step": routine_step.lower(),
            "notes": routine_analysis.get("notes", []),
            "warnings": routine_analysis.get("warnings", [])
        },
        "overall_assessment": {
            "suitability": f"{confidence_level} suitability for your skin profile",
            "confidence_score": confidence_score,
            "authenticity_confidence": authenticity
        },
        "disclaimer": "This analysis is educational and does not replace professional dermatological advice."
    }
