from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

from services.ingredient_engine import analyze_ingredients
from services.routine_engine import analyze_routine
from services.confidence_engine import calculate_confidence
from services.authenticity_engine import analyze_authenticity
from services.response_formatter import format_final_response


app = FastAPI(title="InciGuide AI Backend")

# ✅ CORS (Frontend access)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ✅ Request schema
class ProductAnalysisRequest(BaseModel):
    product_name: Optional[str] = "Demo Product"
    skin_type: str = "Sensitive"
    routine_step: str = "Serum"
    ingredients: List[str] = [
        "Glycerin",
        "Niacinamide",
        "Fragrance"
    ]


# ✅ Health check
@app.get("/")
def health_check():
    return {
        "status": "ok",
        "message": "InciGuide AI backend is running"
    }


# ✅ MAIN API (works with or without frontend input)
@app.post("/analyze-product")
def analyze_product(request: Optional[ProductAnalysisRequest] = None):
    """
    If request is None → Demo mode (for frontend & judges)
    """

    # 🟢 DEMO FALLBACK (IMPORTANT)
    if request is None:
        request = ProductAnalysisRequest()

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
