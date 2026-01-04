# InciGuide AI – System Architecture

- React frontend sends product data to FastAPI
- Backend processes data using modular AI engines
- Results are returned as structured JSON
- Docker Compose connects services internally

## High-Level Flow
User Input → FastAPI API → AI Engines → Confidence Engine → Safe Response

## Core Components
- Ingredient Engine
- Routine Engine
- Authenticity Engine
- Confidence Engine
- Response Formatter

## Design Principles
- Explainable AI (no black-box decisions)
- Rule-based logic
- Safety-first outputs
- Modular backend services

