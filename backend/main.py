from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
from services.ingredient_engine import analyze_ingredients
from services.routine_engine import analyze_routine
from services.confidence_engine import calculate_confidence
from services.authenticity_engine import analyze_authenticity
from services.response_formatter import format_final_response




app = FastAPI(title="InciGuide AI Backend")


class ProductAnalysisRequest(BaseModel):
    product_name: Optional[str] = None
    skin_type: str
    routine_step: str
    ingredients: List[str]


@app.get("/")
def health_check():
    return {
        "status": "ok",
        "message": "InciGuide AI backend is running"
    }
@app.post("/analyze-product")
def analyze_product(request: ProductAnalysisRequest):
    ingredient_analysis = analyze_ingredients(
        request.ingredients,
        request.skin_type
    )

    routine_analysis = analyze_routine(
        request.routine_step,
        request.ingredients
    )

    authenticity = analyze_authenticity(
        request.ingredients
    )

    confidence = calculate_confidence(
        ingredient_analysis,
        routine_analysis,
        authenticity
    )

    return format_final_response(
        product_name=request.product_name,
        skin_type=request.skin_type,
        routine_step=request.routine_step,
        ingredient_analysis=ingredient_analysis,
        routine_analysis=routine_analysis,
        confidence_level=confidence["level"],
        confidence_score=confidence["score"],
        authenticity=authenticity
    )
