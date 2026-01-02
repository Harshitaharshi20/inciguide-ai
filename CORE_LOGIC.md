# Core Logic – InciGuide AI

## 1. System Inputs

### User Inputs
- Skin type (Dry / Oily / Combination / Sensitive)
- Skin concerns (optional: acne, dryness, irritation)
- Routine step (cleanser, toner, serum, moisturizer, sunscreen)
- Product ingredient list (INCI format)
- Optional product images (future)
- Optional barcode / batch code (future)

## 2. Ingredient Understanding Logic

### Ingredient Categorization
Each ingredient is categorized as:
- Beneficial
- Neutral
- Use with Caution

Categorization depends on:
- Skin type
- Routine step
- Known sensitivity risks

Example Rules:
- If skin type = Sensitive → Fragrance = Use with Caution
- If routine step = Sunscreen → Alcohol-heavy ingredients may be acceptable
- If multiple exfoliating ingredients exist → Flag irritation risk

## 3. Routine & Layering Logic

### Routine Order Rules
- Cleanser → Toner → Serum → Moisturizer → Sunscreen
- Sunscreen is recommended only for AM routine
- Actives should not be layered excessively

Example Rules:
- Do not recommend exfoliating serums daily for sensitive skin
- Warn if multiple actives exist in the same routine

## 4. Product Interaction Logic

### Cross-Product Analysis
- Detect overlapping active ingredients
- Identify ingredient conflicts
- Reduce confidence when conflicts exist

Example:
- Vitamin C + Strong exfoliants → Caution
- Multiple retinoid-like ingredients → High irritation risk

## 5. Authenticity Confidence Logic

### Signals Used
- Ingredient list consistency
- Packaging text quality
- Barcode or batch pattern structure

### Output
- Authenticity Confidence: High / Medium / Low

Rules:
- Missing ingredients → Lower confidence
- Unusual ingredient ordering → Lower confidence
- Label spelling errors → Lower confidence

## 6. Confidence Scoring Logic

### Confidence Levels
- High: Inputs consistent, low risk
- Medium: Minor conflicts or missing data
- Low: Major conflicts or incomplete inputs

Rule:
- If confidence is Low → Limit recommendations and suggest professional guidance

## 7. Allowed Output Language

System MUST:
- Use cautious, educational language
- Explain “why” something is flagged
- Avoid absolute claims

System MUST NOT:
- Diagnose conditions
- Declare products fake or counterfeit
- Provide legal or medical guarantees
